"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { useSections } from "./section-provider";

import type { Page } from "fumadocs-core/source";

export function Pagination({ page }: { page: Page }) {
	const sections = useSections();

	const allPages = sections.flatMap((section) => section.items);
	const currentIndex = allPages.findIndex((item) => item.href === page.url);

	const previousPage = currentIndex > 0 ? allPages[currentIndex - 1] : null;
	const nextPage =
		currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

	return (
		<footer className="mt-16 text-sm leading-6">
			<div className="flex items-center justify-between gap-2 text-gray-700 dark:text-gray-200">
				{previousPage && (
					<Link
						prefetch
						href={previousPage.href || "#"}
						className="group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"
					>
						<ChevronLeftIcon className="size-4 transition-transform group-hover:-translate-x-1 duration-300" />
						<span>{previousPage.label}</span>
					</Link>
				)}
				{nextPage && (
					<Link
						prefetch
						href={nextPage.href || "#"}
						className="ml-auto group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"
					>
						<span>{nextPage.label}</span>
						<ChevronRightIcon className="size-4 transition-transform group-hover:translate-x-1 duration-300" />
					</Link>
				)}
			</div>
		</footer>
	);
}
