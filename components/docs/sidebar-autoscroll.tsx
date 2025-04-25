"use client";

import { useLayoutEffect, useRef } from "react";

export function DocsSidebarAutoscroll({
	children,
}: {
	children: React.ReactNode;
}) {
	const ref = useRef<HTMLDivElement>(null);

	// Define a more specific type for the non-standard method
	interface ElementWithScrollIntoViewIfNeeded extends Element {
		scrollIntoViewIfNeeded(): void;
	}

	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;

		const activeLink = element.querySelector(
			"[data-autoscroll] [aria-current=page]",
		);
		if (!activeLink) return;

		if ("scrollIntoViewIfNeeded" in activeLink) {
			(
				activeLink as ElementWithScrollIntoViewIfNeeded
			).scrollIntoViewIfNeeded();
		} else {
			activeLink.scrollIntoView();
		}
	}, []);

	return <div ref={ref}>{children}</div>;
}
