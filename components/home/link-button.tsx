import clsx from "clsx";
import Link from "next/link";
import type React from "react";

export default function LinkButton({
	className,
	children,
	href,
}: {
	children: React.ReactNode;
	className?: string;
	href: string;
}) {
	return (
		<Link
			href={href}
			className={clsx(
				className,
				"inline-block rounded-4xl bg-gray-1000 px-4 py-2 text-sm/6 font-semibold text-white dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors",
			)}
		>
			{children}
		</Link>
	);
}
