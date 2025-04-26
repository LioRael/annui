"use client";

import { Index } from "@/__registry__";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";
import { PreviewCodeBlock } from "./codeblock";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	extractClassname?: boolean;
	extractedClassNames?: string;
	align?: "center" | "start" | "end";
	justify?: "center" | "start" | "end";
	description?: string;
	hideCode?: boolean;
	type?: "block" | "component" | "example";
}

export function ComponentPreview({
	name,
	type,
	children,
	className,
	align = "center",
	justify = "center",
	hideCode = false,
	...props
}: ComponentPreviewProps) {
	const Codes = React.Children.toArray(children) as React.ReactElement[];
	const Code = Codes[0] as React.ReactElement;

	const Preview = React.useMemo(() => {
		const Component = Index[name]?.component;

		if (!Component) {
			return (
				<p className="text-sm text-muted-foreground">
					Component{" "}
					<code className="relative rounded-lg bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
						{name}
					</code>{" "}
					not found in registry.
				</p>
			);
		}

		return <Component />;
	}, [name]);

	if (type === "block") {
		return (
			<div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-lg border">
				<Image
					src={`/images/blocks/${name}.png`}
					alt={name}
					width={1440}
					height={900}
					className="absolute left-0 top-0 z-20 w-[970px] max-w-none bg-background dark:hidden sm:w-[1280px] md:hidden md:dark:hidden"
				/>
				<Image
					src={`/images/blocks/${name}-dark.png`}
					alt={name}
					width={1440}
					height={900}
					className="absolute left-0 top-0 z-20 hidden w-[970px] max-w-none bg-background dark:block sm:w-[1280px] md:hidden md:dark:hidden"
				/>
				<div className="absolute inset-0 hidden w-[1600px] bg-background md:block">
					<iframe
						src={`/blocks/default/${name}`}
						className="size-full"
						title={`${name} preview`}
					/>
				</div>
			</div>
		);
	}

	const CodeProps = Code?.props as { children: React.ReactNode };
	const CodeChildren = CodeProps?.children;

	return (
		<PreviewCodeBlock
			preview={
				<div
					className={cn(
						"flex w-full",
						{
							"items-center": align === "center",
							"items-start": align === "start",
							"items-end": align === "end",
						},
						{
							"justify-center": justify === "center",
							"justify-start": justify === "start",
							"justify-end": justify === "end",
						},
					)}
				>
					<React.Suspense
						fallback={
							<div className="flex w-full items-center justify-center text-sm text-muted-foreground">
								<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
								Loading...
							</div>
						}
					>
						{Preview}
					</React.Suspense>
				</div>
			}
		>
			{CodeChildren}
		</PreviewCodeBlock>
	);
}
