import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { markdownPath } from "@/data/markdown";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site.config";
import { collectionDateSort } from "@/utils/date";

/** AgentReady AR-FIND-04: one manifest of the agent-facing resources this site ships. */
export const GET: APIRoute = async ({ site }) => {
	const url = (path: string) => new URL(path, site).href;
	const host = new URL(siteConfig.url).hostname;
	const entry = (
		id: string,
		displayName: string,
		type: string,
		path: string,
		description: string,
	) => ({
		identifier: `urn:air:${host}:${id}`,
		displayName,
		type,
		url: url(path),
		description,
	});
	const posts = (await getAllPosts()).sort(collectionDateSort);
	const notes = (await getCollection("note")).sort(collectionDateSort);
	const mirrors = [
		...posts.map((post) => ({ kind: "post", entry: post, path: `/posts/${post.id}/` })),
		...notes.map((note) => ({ kind: "note", entry: note, path: `/notes/${note.id}/` })),
	].map(({ kind, entry: { id, data }, path }) =>
		entry(
			`${kind}:${id}`,
			data.title,
			"text/markdown",
			markdownPath(path),
			`Markdown version of ${url(path)}${data.description ? `: ${data.description}` : ""}`,
		),
	);
	const catalog = {
		specVersion: "1.0",
		host: { displayName: siteConfig.title, documentationUrl: url("/about/") },
		entries: [
			entry(
				"docs:llms-txt",
				"llms.txt",
				"text/markdown",
				"/llms.txt",
				"Described index of the site's pages, posts, and notes.",
			),
			entry(
				"feed:posts",
				"Posts feed",
				"application/rss+xml",
				"/rss.xml",
				"RSS feed of published posts.",
			),
			entry(
				"feed:notes",
				"Notes feed",
				"application/rss+xml",
				"/notes/rss.xml",
				"RSS feed of notes.",
			),
			entry(
				"index:sitemap",
				"Sitemap",
				"application/xml",
				"/sitemap-index.xml",
				"Sitemap index of every published page.",
			),
			...mirrors,
		],
	};
	return new Response(JSON.stringify(catalog, null, "\t"), {
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
};
