import type { APIRoute } from "astro";
import { siteConfig } from "@/site.config";

/** AgentReady AR-FIND-04: one manifest of the agent-facing resources this site ships. */
export const GET: APIRoute = ({ site }) => {
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
		],
	};
	return new Response(JSON.stringify(catalog, null, "\t"), {
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
};
