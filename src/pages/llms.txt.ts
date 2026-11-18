import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { markdownPath } from "@/data/markdown";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site.config";
import { collectionDateSort } from "@/utils/date";

/** AgentReady AR-READ-07: a lean, described index of the site's key pages. */
export const GET: APIRoute = async ({ site }) => {
	const url = (path: string) => new URL(path, site).href;
	const link = (title: string, path: string, description?: string) =>
		`- [${title}](${url(path)})${description ? `: ${description}` : ""}`;

	const posts = (await getAllPosts()).sort(collectionDateSort);
	const notes = (await getCollection("note")).sort(collectionDateSort);

	const body = [
		`# ${siteConfig.title}`,
		"",
		`> ${siteConfig.description}`,
		"",
		`Every post and note below is also available as Markdown at the same path with a .md extension, for example ${url(markdownPath(`/posts/${posts[0]?.id ?? "example"}/`))}.`,
		"",
		"## About",
		"",
		link("About", "/about/", "A little about Doug"),
		link("Now", "/now/", "What I'm on lately"),
		link("Uses", "/uses/", "These are my tools, there are many like them but these are my own."),
		"",
		"## Posts",
		"",
		...posts.map((post) => link(post.data.title, `/posts/${post.id}/`, post.data.description)),
		"",
		"## Notes",
		"",
		...notes.map((note) => link(note.data.title, `/notes/${note.id}/`, note.data.description)),
		"",
		"## Optional",
		"",
		link("Posts RSS feed", "/rss.xml"),
		link("Notes RSS feed", "/notes/rss.xml"),
		link("Sitemap", "/sitemap-index.xml"),
		"",
	].join("\n");

	return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
