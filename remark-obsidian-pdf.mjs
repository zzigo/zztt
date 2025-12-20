import { visit } from 'unist-util-visit';

export function remarkObsidianPdf() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      // Regex to match ![[filename.pdf]]
      const regex = /!\[\[\s*(.*?\.pdf)\s*\]\]/g;
      
      if (node.value.match(regex)) {
        const children = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(node.value)) !== null) {
          // Push text before the match
          if (match.index > lastIndex) {
            children.push({ type: 'text', value: node.value.slice(lastIndex, match.index) });
          }

          const fileName = match[1];

          // Push the MDX component
          children.push({
            type: 'mdxJsxFlowElement',
            name: 'PdfFlipbook',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'file', value: fileName },
              { type: 'mdxJsxAttribute', name: 'client:only', value: 'react' }
            ],
            children: []
          });

          lastIndex = regex.lastIndex;
        }

        // Push text after the last match
        if (lastIndex < node.value.length) {
          children.push({ type: 'text', value: node.value.slice(lastIndex) });
        }

        // Replace the original text node with the new nodes
        parent.children.splice(index, 1, ...children);
      }
    });
  };
}
