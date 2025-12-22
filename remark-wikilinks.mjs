import { visit } from 'unist-util-visit';
import { readdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Build file index for quick lookups
function buildContentIndex() {
  const index = {};
  const contentPath = resolve(__dirname, 'src/content');
  
  // Folders to exclude from scanning
  const excludedFolders = ['inc'];
  
  // Auto-discover all collection folders except excluded ones
  if (existsSync(contentPath)) {
    const folders = readdirSync(contentPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !excludedFolders.includes(dirent.name))
      .map(dirent => dirent.name);
    
    folders.forEach(collection => {
      const collectionPath = resolve(contentPath, collection);
      const files = readdirSync(collectionPath);
      files.forEach(file => {
        if (file.endsWith('.md')) {
          const name = file.replace('.md', '');
          const slugLower = name.toLowerCase().replace(/\s+/g, '-');
          // Store both the collection and the original filename for case-sensitive URLs
          index[slugLower] = { collection, originalName: name };
        }
      });
    });
  }
  
  return index;
}

export default function remarkWikilinks() {
  const contentIndex = buildContentIndex();
  
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!node.value || typeof node.value !== 'string') return;

      const regex = /\[\[([^\]]+)\]\]/g;
      const matches = [...node.value.matchAll(regex)];
      
      if (matches.length === 0) return;

      const newNodes = [];
      let lastIndex = 0;

      matches.forEach((match) => {
        const [fullMatch, linkText] = match;
        const matchStart = match.index;

        // Add text before the match
        if (matchStart > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchStart)
          });
        }

        // Check if linkText has collection prefix (e.g., "research/diGLo")
        let collection, slug, displayText;
        
        if (linkText.includes('/')) {
          // Has collection prefix - extract it
          const slashIndex = linkText.indexOf('/');
          collection = linkText.substring(0, slashIndex);
          displayText = linkText.substring(slashIndex + 1);
          
          // Look up the actual file casing even when collection is specified
          const lookupSlug = displayText.toLowerCase().replace(/\s+/g, '-');
          const indexEntry = contentIndex[lookupSlug];
          
          if (indexEntry && indexEntry.collection === collection) {
            // Use the original filename casing for case-sensitive URLs
            slug = indexEntry.originalName.replace(/\s+/g, '-');
          } else {
            // File not found or wrong collection, use what was provided
            slug = displayText.replace(/\s+/g, '-');
          }
        } else {
          // No prefix, use index to determine collection
          displayText = linkText;
          const lookupSlug = linkText.toLowerCase().replace(/\s+/g, '-');
          const indexEntry = contentIndex[lookupSlug];
          
          if (indexEntry) {
            collection = indexEntry.collection;
            // Use the original filename casing for case-sensitive URLs
            slug = indexEntry.originalName.replace(/\s+/g, '-');
          } else {
            // Default to works if not found
            collection = 'works';
            slug = displayText.replace(/\s+/g, '-');
          }
        }
        
        // Create link node with the determined collection and case-sensitive slug
        newNodes.push({
          type: 'link',
          url: `/${collection}/${slug}`,
          children: [{ type: 'text', value: displayText }]
        });

        lastIndex = matchStart + fullMatch.length;
      });

      // Add remaining text
      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex)
        });
      }

      // Replace the text node with the new nodes
      parent.children.splice(index, 1, ...newNodes);
    });
  };
}
