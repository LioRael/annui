import { source } from "@/lib/source";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import getDocsPage from "../../shared";

export default getDocsPage(source);

export function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: Array<string> }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description,
	} satisfies Metadata;
}
