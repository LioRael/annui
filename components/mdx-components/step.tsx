"use client";

import React from "react";

import { cn } from "@/lib/cn";

export function Steps({
	children,
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const childrenArray = React.Children.toArray(children);

	const stepsWithIndices = childrenArray.map((child, i) => {
		if (React.isValidElement(child)) {
			const childElement = child as React.ReactElement<{ index?: number }>;
			if (childElement.props.index === undefined) {
				return React.cloneElement(childElement, { index: i + 1 });
			}
		}
		return child;
	});

	return (
		<div
			className={cn(
				"grid grid-cols-[auto_repeat(5,minmax(0,1fr))] gap-x-6 xl:gap-y-10 mt-10",
				className,
			)}
		>
			{stepsWithIndices}
		</div>
	);
}

export function Step({
	children,
	index,
}: React.PropsWithChildren<{
	index?: number;
}>) {
	const formattedIndex =
		index !== undefined ? index.toString().padStart(2, "0") : "";

	const childrenArray = React.Children.toArray(children);

	const title = childrenArray[0];
	const description = childrenArray[1];
	const content = childrenArray[2];

	return (
		<>
			<div className="mt-0">
				<div className="not-prose grid size-7 grid-cols-1 grid-rows-1 place-content-center border-1 border-gray-700/50 font-mono text-[10px]/7 font-medium text-gray-950 dark:border-white/50 dark:text-white">
					<div className="col-start-1 row-start-1 grid place-content-center">
						<div className="h-7 w-5 bg-white dark:bg-gray-950" />
					</div>
					<div className="col-start-1 row-start-1 grid place-content-center tracking-widest">
						{formattedIndex}
					</div>
				</div>
			</div>
			<div className="col-span-5 xl:col-span-2 mt-0">
				{title}
				{description}
			</div>
			{content}
		</>
	);
}

export const StepTitle = ({ children }: React.PropsWithChildren) => {
	return (
		<h4 className="not-prose mb-2 text-sm leading-6 font-semibold text-slate-900 dark:text-slate-200">
			{children}
		</h4>
	);
};
StepTitle.displayName = "StepTitle";

export function StepDescription({ children }: React.PropsWithChildren) {
	return (
		<div className="prose">
			<p>{children}</p>
		</div>
	);
}
StepDescription.displayName = "StepDescription";

export function StepContent({ children }: React.PropsWithChildren) {
	return (
		<div className="col-span-full mt-6 mb-16 sm:ml-13 xl:col-span-3 xl:m-0 xl:ml-0 prose">
			{children}
		</div>
	);
}
StepContent.displayName = "StepContent";
