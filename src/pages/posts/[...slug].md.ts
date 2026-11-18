import type { APIRoute, GetStaticPaths } from "astro";
import { markdownResponse, toMarkdown } from "@/data/markdown";
import { getAllPosts } from "@/data/post";

export const getStaticPaths = (async () => {
	const posts = await getAllPosts();
	return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
	const { post } = props as Awaited<ReturnType<typeof getStaticPaths>>[number]["props"];
	return markdownResponse(toMarkdown(post, new URL(`/posts/${post.id}/`, site).href));
};
