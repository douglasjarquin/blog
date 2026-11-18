import type { CollectionEntry } from "astro:content";
import { siteConfig } from "@/site.config";

/** Absolute URL on this site for a root-relative path. */
const siteUrl = (path: string) => new URL(path, siteConfig.url).href;

const personId = siteUrl("/#person");
const websiteId = siteUrl("/#website");

/** Only facts already published on the About page. */
const person = {
	"@type": "Person",
	"@id": personId,
	name: siteConfig.author,
	url: siteUrl("/about/"),
	image: siteUrl("/profile.jpg"),
	sameAs: [
		"https://github.com/douglasjarquin",
		"https://www.linkedin.com/in/douglasjarquin/",
		"https://x.com/douglasjarquin",
	],
};

export function homeStructuredData() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": websiteId,
				name: siteConfig.title,
				url: siteConfig.url,
				description: siteConfig.description,
				inLanguage: siteConfig.lang,
				author: { "@id": personId },
			},
			person,
		],
	};
}

export function postStructuredData(post: CollectionEntry<"post">) {
	const url = siteUrl(`/posts/${post.id}/`);
	const { title, description, publishDate, updatedDate, ogImage, tags } = post.data;
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"@id": `${url}#article`,
		headline: title,
		description,
		url,
		mainEntityOfPage: url,
		datePublished: publishDate.toISOString(),
		dateModified: (updatedDate ?? publishDate).toISOString(),
		image: siteUrl(ogImage ?? "/social-card.png"),
		inLanguage: siteConfig.lang,
		keywords: tags,
		author: person,
		isPartOf: { "@type": "WebSite", "@id": websiteId, name: siteConfig.title, url: siteConfig.url },
	};
}

/** Serialize for an inline JSON-LD script without letting content close the tag. */
export function serializeJsonLd(data: object) {
	return JSON.stringify(data).replace(/</g, "\\u003c");
}
