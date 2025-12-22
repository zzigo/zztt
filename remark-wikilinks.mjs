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
  
  const collections = ['works', 'research'];
  
  collections.forEach(collection => {
    const collectionPath = resolve(contentPath, collection);
    if (existsSync(collectionPath)) {
      const files = readdirSync(collectionPath);
      files.forEach(file => {
        if (file.endsWith('.md')) {
          const name = file.replace('.md', '');
          const slug = name.toLowerCase().replace(/\s+/g, '-');
          index[slug] = collection;
        }
      });
    }
  });
  
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

        // Convert to slug: lowercase and replace spaces with hyphens
        const slug = linkText.toLowerCase().replace(/\s+/g, '-');
        
        // Determine collection from index
        const collection = contentIndex[slug] || 'works';
        
        // Create link node
        newNodes.push({
          type: 'link',
          url: `/${collection}/${slug}`,
          children: [{ type: 'text', value: linkText }]
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
