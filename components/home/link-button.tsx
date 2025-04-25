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
				"inline-block rounded-4xl px-4 py-2 text-sm/6 font-semibold text-white bg-default-1000 hover:bg-default-800 dark:bg-default-200 dark:hover:bg-default-300 transition-colors",
			)}
		>
			{children}
		</Link>
	);
}
