import { Breadcrumb } from "@/components/docs/breadcrumb";
import { sections, source } from "@/lib/source";
import { notFound } from "next/navigation";

type Params = {
	params: Promise<{
		slug?: string[];
	}>;
};

export default async function DocsTitle(props: Params) {
	const params = await props.params;
	const page = source.getPage(params.slug);
	if (!page) notFound();
	const section = sections.find((g) =>
		g.items.some((item) => item.href === page.url),
	);
	if (!section) notFound();

	return (
		<Breadcrumb
			section={section.label}
			title={page.data.slogan ?? page.data.title}
		/>
	);
}
