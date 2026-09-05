import { Resvg } from "@resvg/resvg-js";
import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import RobotoMonoBold from "@/assets/roboto-mono-700.ttf";
import RobotoMono from "@/assets/roboto-mono-regular.ttf";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site.config";
import { getFormattedDate } from "@/utils/date";

const ogOptions: SatoriOptions = {
	// debug: true,
	fonts: [
		{
			data: Buffer.from(RobotoMono),
			name: "Roboto Mono",
			style: "normal",
			weight: 400,
		},
		{
			data: Buffer.from(RobotoMonoBold),
			name: "Roboto Mono",
			style: "normal",
			weight: 700,
		},
	],
	height: 630,
	width: 1200,
};

const markup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full bg-[#f8f4ec] text-[#282218]">
		<div tw="flex flex-1 items-center w-full px-16">
			<div
				tw="flex items-center justify-center w-72 h-72 rounded-full border-8 border-[#3f704d] bg-[#3f704d] text-[#f8f4ec]"
			>
				<p tw="text-8xl font-bold italic">DJ</p>
			</div>
			<div tw="flex flex-col flex-1 ml-14">
				<p tw="text-2xl mb-6 uppercase tracking-widest text-[#8d8371]">${pubDate}</p>
				<h1 tw="text-6xl font-bold leading-snug">${title}</h1>
			</div>
		</div>
		<div
			tw="flex items-center justify-between w-full px-16 py-8 border-t-4 border-[#3f704d] text-xl"
		>
			<div tw="flex items-center">
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d] bg-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d] bg-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d] bg-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d] bg-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d] bg-[#3f704d]"></div>
				<div tw="flex w-5 h-5 mr-2 border-2 border-[#3f704d]"></div>
			</div>
			<p tw="font-semibold">by ${siteConfig.author}</p>
		</div>
	</div>`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { pubDate, title } = context.props as Props;

	const postDate = getFormattedDate(pubDate, {
		month: "long",
		weekday: "long",
	});
	const svg = await satori(markup(title, postDate), ogOptions);
	const pngBuffer = new Resvg(svg).render().asPng();
	const png = new Uint8Array(pngBuffer);
	return new Response(png, {
		headers: {
			"Cache-Control": "public, max-age=31536000, immutable",
			"Content-Type": "image/png",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.filter(({ data }) => !data.ogImage)
		.map((post) => ({
			params: { slug: post.id },
			props: {
				pubDate: post.data.updatedDate ?? post.data.publishDate,
				title: post.data.title,
			},
		}));
}
