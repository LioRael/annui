"use client";

import { Tabs as BaseTabs } from "@base-ui-components/react";
import { motion } from "motion/react";
import React, { useId } from "react";

import { cn } from "@/lib/cn";

import type { ReactElement, ReactNode } from "react";

type TabsProps = React.ComponentProps<typeof BaseTabs.Root> & {
	items: Array<string>;
};

type TabProps = {
	children: ReactNode;
	value?: string;
};

export function Tabs({ children, className, items, ...props }: TabsProps) {
	const id = useId();
	const childrenArray = React.Children.toArray(children);

	const panels = childrenArray.map((child, index) => {
		if (React.isValidElement(child)) {
			const reactChild = child as ReactElement<
				React.ComponentProps<typeof BaseTabs.Panel>
			>;
			const tabValue = reactChild.props.value || items[index];

			return (
				<BaseTabs.Panel key={tabValue} value={tabValue}>
					{reactChild.props.children}
				</BaseTabs.Panel>
			);
		}
		return null;
	});

	return (
		<BaseTabs.Root defaultValue={items[0]} {...props}>
			<BaseTabs.List
				render={
					<div className="-mx-4 mb-6 flex sm:-mx-6">
						<div className="min-w-full max-w-full overflow-auto flex-none px-4 sm:px-6">
							<div className="mb-px flex gap-x-6 border-b border-gray-950/5 whitespace-nowrap dark:border-white/10 not-prose">
								{items.map((item) => (
									<BaseTabs.Tab
										key={item}
										value={item}
										render={(tabProps, { selected }) => (
											<div {...tabProps}>
												{selected && (
													<motion.span
														className="bg-current w-full h-px bottom-0 absolute"
														layoutId={`tab-${id}`}
													/>
												)}
												{item}
											</div>
										)}
										className={(state) =>
											cn(
												"relative -mb-px flex pb-2 text-sm/7 font-medium cursor-pointer transition-colors",
												state.selected
													? "text-gray-950 dark:text-white"
													: "border-b border-transparent text-gray-700 hover:border-gray-950/25 dark:text-gray-200 dark:hover:border-white/25",
											)
										}
									/>
								))}
							</div>
						</div>
					</div>
				}
			/>
			{panels}
		</BaseTabs.Root>
	);
}

export function Tab({ children }: TabProps) {
	return <>{children}</>;
}

export function TabDescription({
	children,
	accessibilityTitle,
}: React.PropsWithChildren<{
	accessibilityTitle?: string;
}>) {
	return (
		<div
			id="content-wrapper"
			className="prose relative z-10 mb-10 max-w-3xl"
			data-content="true"
		>
			<h3 data-title="true" className="sr-only">
				{accessibilityTitle}
			</h3>
			{children}
		</div>
	);
}
