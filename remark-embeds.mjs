import { visit } from "unist-util-visit";
import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";

function stripFrontmatterLoose(md) {
  const lines = md.split(/\r?\n/);

  if (lines[0]?.trim() !== "---") return md;

  let i = 1;
  while (i < lines.length) {
    if (lines[i].trim() === "---") {
      return lines.slice(i + 1).join("\n");
    }
    i++;
  }

  return md;
}

export default function remarkEmbeds() {
  return (tree, file) => {
    const baseDir =
      file.history?.[0]
        ? path.dirname(file.history[0])
        : process.cwd();

    visit(tree, "paragraph", (node, index, parent) => {
      if (!parent || typeof index !== "number") return;

      if (!node.children || node.children.length !== 1) return;
      const only = node.children[0];
      if (only.type !== "text") return;

      const match = only.value.match(/^!\[\[(.+?)\]\]$/);
      if (!match) return;

      let target = path.resolve(baseDir, match[1]);
      if (!path.extname(target)) target += ".md";
      if (!fs.existsSync(target)) return;

      try {
        const raw = fs.readFileSync(target, "utf8");
        const stripped = stripFrontmatterLoose(raw);

        const ast = unified()
          .use(remarkParse)
          .parse(stripped);

        parent.children.splice(index, 1, ...ast.children);
        return [visit.SKIP, index];
      } catch (e) {
        console.error("Embed failed:", target, e);
      }
    });
  };
}