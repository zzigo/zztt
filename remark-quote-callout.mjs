import { visit } from "unist-util-visit";

export default function remarkQuoteCallout() {
  return (tree) => {
    visit(tree, "blockquote", (node, index, parent) => {
      if (!parent || !node.children?.length) return;

      const first = node.children[0];
      if (first.type !== "paragraph") return;

      const text = first.children?.[0];
      if (!text || text.type !== "text") return;

      const match = text.value.match(/^\[!(\w+)\]([+-]?)\s*(.*)$/i);
      if (!match) return;

      const type = match[1].toLowerCase();
      const fold = match[2];
      const isFoldable = fold === "-" || fold === "+";
      const open = fold === "+";
      const title = (match[3] || type).trim();

      const contentChildren = node.children.slice(1);

      const titleNode = {
        type: "element",
        tagName: isFoldable ? "summary" : "div",
        properties: { className: ["callout-title"] },
        children: [{ type: "text", value: title }],
      };

      const contentNode = {
        type: "element",
        tagName: "div",
        properties: { className: ["callout-content"] },
        children: contentChildren,
      };

      const wrapper = {
        type: "element",
        tagName: isFoldable ? "details" : "div",
        properties: {
          className: ["callout", `callout-${type}`],
          ...(isFoldable && open ? { open: true } : {}),
        },
        children: [titleNode, contentNode],
      };

      parent.children[index] = wrapper;
    });
  };
}