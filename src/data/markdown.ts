import type { CollectionEntry } from "astro:content";

/** Markdown mirror path for an HTML page path ending in "/", e.g. /posts/a/ -> /posts/a.md */
export const markdownPath = (pagePath: string) => `${pagePath.replace(/\/$/, "")}.md`;

/** A post or note as a standalone Markdown document: title, summary, date, then the source body. */
export function toMarkdown(entry: CollectionEntry<"post"> | CollectionEntry<"note">, url: string) {
	const { title, description, publishDate } = entry.data;
	const lines = [`# ${title}`, ""];
	if (description) lines.push(`> ${description}`, "");
	lines.push(`Published: ${publishDate.toISOString()}`, `Source: ${url}`, "");
	return `${lines.join("\n")}\n${(entry.body ?? "").trim()}\n`;
}

export const markdownResponse = (body: string) =>
	new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
