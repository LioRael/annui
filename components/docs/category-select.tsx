"use client";

import { Select } from "@base-ui-components/react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Category = {
	label: string;
	defaultHref: string;
};

const categories = [
	{
		label: "base",
		defaultHref: "/base/getting-started/introduction",
	},
	{
		label: "plus",
		defaultHref: "/plus",
	},
] satisfies Category[];

export function CategorySelect() {
	const pathname = usePathname();
	const router = useRouter();
	const category = pathname.split("/")[1];
	const activeCategory = category === "" ? "base" : category;
	const [open, setOpen] = React.useState(false);

	return (
		<Select.Root
			value={activeCategory}
			onValueChange={(c) => {
				const selectedCategory = categories.find((cat) => cat.label === c);
				if (!selectedCategory) return;
				router.push(selectedCategory.defaultHref);
				setOpen(false);
			}}
			open={open}
			onOpenChange={setOpen}
		>
			<Select.Trigger
				aria-label="Version"
				className="flex items-center gap-0.5 transition-colors rounded-2xl bg-gray-950/5 py-0.5 pr-1.5 pl-2.5 text-xs/5 font-medium text-gray-950 tabular-nums outline-none select-none hover:bg-gray-950/7.5 data-active:bg-gray-950/7.5 dark:bg-white/10 dark:text-white dark:hover:bg-white/12.5 dark:data-active:bg-white/12.5"
			>
				<span className="capitalize">{activeCategory}</span>
				<Select.Icon>
					<ChevronDownIcon className="size-4 text-gray-400" />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner align="start">
					<Select.Popup
						render={
							<motion.div
								initial={false}
								animate={{
									opacity: open ? 1 : 0,
									scale: open ? 1 : 0.8,
								}}
								transition={{
									duration: open ? 0.2 : 0.1,
								}}
								className="mt-2 w-28 rounded-xl bg-white p-1 py-1 text-xs/7 font-medium text-gray-950 tabular-nums shadow-sm ring ring-gray-950/5 outline-none dark:bg-gray-950 dark:text-white dark:ring-white/10 origin-top-left"
							/>
						}
					>
						{categories.map((item) => (
							<SelectItem key={item.label} value={item.label} />
						))}
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	);
}

function SelectItem(props: React.ComponentProps<typeof Select.Item>) {
	return (
		<Select.Item
			{...props}
			className="flex items-center transition-colors justify-between gap-2 rounded-lg px-2.5 outline-none not-data-selected:cursor-pointer data-highlighted:not-data-selected:bg-gray-950/5 dark:data-highlighted:not-data-selected:bg-white/10"
		>
			<Select.ItemText className="capitalize">{props.value}</Select.ItemText>
			<Select.ItemIndicator>
				<CheckIcon className="size-4" />
			</Select.ItemIndicator>
		</Select.Item>
	);
}
