"use client";

import { useEffect, useState } from "react";

import {
	NavList,
	NavListHeading,
	NavListItem,
	NavListItems,
	NavListLink,
} from "./nav-list";

export type TOCEntry = {
	level: number;
	text: string;
	slug: string;
	children: Array<TOCEntry>;
};

export default function TableOfContents({
	tableOfContents,
}: {
	tableOfContents: Array<TOCEntry>;
}) {
	const [activeSection, setActiveSection] = useState<string | null>(null);
	useEffect(() => {
		const root = document.querySelector('[data-content="true"]');
		if (!root) return;

		const elements = root.children;
		const sections: Map<Element, string> = new Map();
		let currentSectionId: string | null = null;
		for (const element of elements) {
			if (element.id && (element.tagName === "H2" || element.tagName === "H3"))
				currentSectionId = element.id;
			if (!currentSectionId) continue;

			sections.set(element, `#${currentSectionId}`);
		}

		const visibleElements = new Set<Element>();

		const callback = (entries: Array<IntersectionObserverEntry>) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					visibleElements.add(entry.target);
				} else {
					visibleElements.delete(entry.target);
				}
			}

			const firstVisibleSection = Array.from(sections.entries()).find(
				([element]) => visibleElements.has(element),
			);
			if (!firstVisibleSection) return;
			setActiveSection(firstVisibleSection[1]);
		};

		const observer = new IntersectionObserver(callback, {
			rootMargin: "-56px 0px",
		});

		for (const element of Array.from(sections.keys())) {
			observer.observe(element);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<NavList name="toc">
			<NavListHeading>On this page</NavListHeading>
			<NavListItems data-toc="true">
				{tableOfContents.map(({ text, slug, children }, index) => (
					<NavListItem key={String(index)}>
						<NavListLink
							aria-current={activeSection === slug ? "location" : undefined}
							href={slug}
						>
							{text}
						</NavListLink>
						{children.length > 0 && (
							<NavListItems nested>
								{children.map(({ text: childText, slug: childSlug }, index) => (
									<NavListItem key={String(index)}>
										<NavListLink
											data-nested
											nested
											aria-current={
												activeSection === childSlug ? "location" : undefined
											}
											href={childSlug}
										>
											{childText}
										</NavListLink>
									</NavListItem>
								))}
							</NavListItems>
						)}
					</NavListItem>
				))}
			</NavListItems>
		</NavList>
	);
}
