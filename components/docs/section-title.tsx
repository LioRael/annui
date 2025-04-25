"use client";

import { useSections } from "./section-provider";

export function SectionTitle({
	url,
	slogan,
}: {
	url: string;
	slogan?: string;
}) {
	const sections = useSections();
	const section = sections.find((g) =>
		g.items.some((item) => item.href === url),
	);

	return (
		<p
			className="flex items-center gap-2 font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
			data-section="true"
		>
			{slogan ?? section?.label}
		</p>
	);
}
