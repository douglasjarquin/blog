import { getCollection } from "astro:content";
import type { APIRoute, GetStaticPaths } from "astro";
import { markdownResponse, toMarkdown } from "@/data/markdown";

export const getStaticPaths = (async () => {
	const notes = await getCollection("note");
	return notes.map((note) => ({ params: { slug: note.id }, props: { note } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
	const { note } = props as Awaited<ReturnType<typeof getStaticPaths>>[number]["props"];
	return markdownResponse(toMarkdown(note, new URL(`/notes/${note.id}/`, site).href));
};
