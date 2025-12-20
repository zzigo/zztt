import { visit } from "unist-util-visit";

export default function remarkQuoteCallout() {
  return (tree) => {
    visit(tree, "blockquote", (node) => {
      const first = node.children?.[0];
      if (!first || first.type !== "paragraph") return;

      const firstText = first.children?.[0];
      if (!firstText || firstText.type !== "text") return;

      const m = firstText.value.match(/^\[!quote\]\s*(.*)$/);
      if (!m) return;

      const author = (m[1] || "").trim();

      node.data = node.data || {};
      node.data.hName = "div";
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        className: ["callout", "callout-quote"],
        "data-callout": "quote",
      };

      // title
      first.data = first.data || {};
      first.data.hName = "p"; // keep it a <p> if you prefer (your CSS already targets p fine)
      first.data.hProperties = { className: ["callout-title"] };
      first.children = [{ type: "text", value: author || "Quote" }];

      // content wrapper: must be a flow container, not a paragraph
      const rest = node.children.slice(1);
      const content = {
        type: "blockquote",
        data: { hName: "div", hProperties: { className: ["callout-content"] } },
        children: rest,
      };

      node.children = [first, content];
    });
  };
}