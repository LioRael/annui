"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { SearchIcon } from "lucide-react";
import type React from "react";

import { Dialog } from "@base-ui-components/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CornerDecorationButton } from "../ui/corner-decoration-button";
import { IconButton } from "../ui/icon-button";
import { CategorySelect } from "./category-select";

export function Header() {
	const router = useRouter();

	return (
		<div className="bg-background-200">
			<div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
				<div className="flex items-center gap-4">
					<Link
						href="/"
						className="shrink-0"
						aria-label="Home"
						onContextMenu={(evt) => {
							evt.preventDefault();
							router.push("/brand");
						}}
					>
						<Logo />
					</Link>
					<CategorySelect />
				</div>
				<div className="flex items-center gap-6 max-md:hidden">
					<SearchButton />
					<Link
						href="/base/getting-started/introduction"
						className="text-sm/6 text-gray-950 dark:text-white"
					>
						Docs
					</Link>
					<Link
						href="/blog"
						className="text-sm/6 text-gray-950 dark:text-white"
					>
						Blog
					</Link>
					<Link
						href="/showcase"
						className="text-sm/6 text-gray-950 dark:text-white"
					>
						Showcase
					</Link>
					<a
						href="/plus?ref=top"
						className="group relative px-1.5 text-sm/6 text-sky-800 dark:text-sky-300"
					>
						<CornerDecorationButton>Plus</CornerDecorationButton>
					</a>

					<Link
						href="https://github.com/annui-org/annui"
						aria-label="GitHub repository"
					>
						<SiGithub className="size-5 fill-black/40 dark:fill-gray-400" />
					</Link>
				</div>
				<div className="flex items-center gap-2.5 md:hidden">
					<button
						type="button"
						aria-label="Search"
						className="inline-grid size-7 place-items-center rounded-md"
					>
						<SearchIcon className="size-4" />
					</button>

					<Dialog.Root>
						<Dialog.Trigger
							render={
								<IconButton aria-label="Navigation">
									<svg
										viewBox="0 0 16 16"
										fill="currentColor"
										className="size-4"
									>
										<title>Open navigation menu</title>
										<path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
									</svg>
								</IconButton>
							}
						/>
						<Dialog.Portal>
							<Dialog.Popup className="fixed inset-0 bg-white focus:outline-none md:hidden dark:bg-gray-950">
								<div className="size-full overflow-y-auto">
									<div className="flex h-14 items-center justify-between px-4 py-4 sm:px-6">
										<Logo />
										<Dialog.Close
											render={
												<IconButton aria-label="Navigation">
													<svg
														viewBox="0 0 16 16"
														fill="currentColor"
														className="size-4"
													>
														<title>Close navigation menu</title>
														<path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
													</svg>
												</IconButton>
											}
										/>
									</div>
									<div className="grid grid-cols-1 gap-1 px-1 pb-1 sm:px-3 sm:pb-3">
										<Link
											href="/docs"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Docs
										</Link>
										<a
											href="/plus/?ref=top"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Plus
										</a>
										<Link
											href="/blog"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Blog
										</Link>
										<Link
											href="/showcase"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											Showcase
										</Link>
										<Link
											href="https://github.com/liorael/taildocs"
											className="rounded-lg px-3 py-2 text-xl/9 font-medium text-gray-950 data-active:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
										>
											GitHub
										</Link>
									</div>
								</div>
							</Dialog.Popup>
						</Dialog.Portal>
					</Dialog.Root>
				</div>
			</div>
		</div>
	);
}

function Logo() {
	return (
		<div className="text-2xl text-gray-950 dark:text-white flex items-center gap-0.5 group">
			Ann
			<span className="group-hover:bg-primary-500 transition-colors bg-primary-400 text-white text-lg rounded-md size-6.5 inline-flex items-center justify-center">
				UI
			</span>
		</div>
	);
}

function SearchButton() {
	return (
		<>
			<button
				type="button"
				className="inline-flex items-center gap-1 rounded-full bg-gray-950/2 px-2 py-1 inset-ring inset-ring-gray-950/8 dark:bg-white/5 dark:inset-ring-white/2"
			>
				<SearchIcon className="-ml-0.5 size-4 text-gray-600 dark:text-gray-500" />
				<kbd className="hidden font-sans text-xs/4 text-gray-500 dark:text-gray-400 [.os-macos_&]:block">
					⌘K
				</kbd>
				<kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&]:block dark:text-gray-400">
					Ctrl&nbsp;K
				</kbd>
			</button>
		</>
	);
}
