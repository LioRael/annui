"use client";

import { Menu as MenuPrimitive } from "@base-ui-components/react/menu";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/registry/lib/cn";
import { resolveClassName } from "@/registry/lib/resolve-classname";
import { type UseThemeOptions, useTheme } from "@/registry/lib/theme";
import { type MotionProps, motion } from "motion/react";
import { tv } from "tailwind-variants";

const animationVariants = {
	closed: {
		opacity: 0,
		scale: 0.8,
		transition: {
			duration: 0.1,
			ease: "easeInOut",
		},
	},
	open: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const variants = tv({
	slots: {
		content: [
			"z-50 min-w-[8rem] overflow-hidden rounded-md border border-default-200 bg-background-200",
			"shadow-none p-2 rounded-lg w-64 focus:outline-none",
		],
		item: [
			"relative flex select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-highlighted:bg-(--item-highlighted) data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
			"h-14 group flex-col items-start justify-center gap-0 rounded-lg cursor-pointer",
		],
		arrow:
			"absolute right-2 text-(--arrow) [&>svg]:w-4 [&>svg]:h-4 opacity-0 group-data-highlighted:opacity-100 -translate-x-2 group-data-highlighted:translate-x-0 transition-all duration-200",
		icon: "absolute flex items-center justify-center size-10 rounded-lg transition-colors duration-200 left-2 mr-2 bg-(--icon-bg) text-(--icon) group-data-highlighted:bg-(--icon-bg-highlighted) group-data-highlighted:text-(--icon-highlighted) [&>svg]:w-5 [&>svg]:h-5",
		title:
			"pl-12 text-sm font-medium group-data-highlighted:text-(--title-highlighted) transition-colors duration-200",
		description:
			"pl-12 text-xs text-default-500 group-data-highlighted:text-(--description-highlighted) transition-colors duration-200",
	},
	variants: {
		color: {
			primary: {
				content:
					"[--arrow:var(--color-primary-500)] [--item-highlighted:var(--color-primary-100)] [--icon-bg:var(--color-primary-100)] [--icon:var(--color-primary-500)] [--icon-bg-highlighted:var(--color-primary-500)] [--icon-highlighted:var(--color-primary-50)] [--title-highlighted:var(--color-primary-500)] [--description-highlighted:var(--color-primary-500)]",
			},
			default: {
				content:
					"[--arrow:var(--color-default-950)] [--item-highlighted:var(--color-default-100)] [--icon-bg:var(--color-default-100)] [--icon:var(--color-default-950)] [--icon-bg-highlighted:var(--color-default-950)] [--icon-highlighted:var(--color-default-50)] [--title-highlighted:var(--color-default-950)] [--description-highlighted:var(--color-default-950)]",
			},
		},
	},
	defaultVariants: {
		color: "default",
	},
});

type MenuAColors = "default" | "primary" | "error" | "warning" | "success";

function MenuContent({
	className,
	children,
	sideOffset = 8,
	theme,
	color = "default",
	...props
}: Omit<React.ComponentProps<typeof MenuPrimitive.Positioner>, "className"> &
	UseThemeOptions<MenuAColors> & {
		className?: string | ((state: MenuPrimitive.Popup.State) => string);
	}) {
	const colorProps = useTheme({
		theme,
		color,
	});

	const getContentClassName = (state: MenuPrimitive.Popup.State) => {
		const resolved = resolveClassName(className)(state);
		return variants({
			color: color === "default" ? "default" : "primary",
		}).content({
			className: resolved,
		});
	};

	return (
		<MenuPrimitive.Portal>
			<MenuPrimitive.Positioner
				sideOffset={sideOffset}
				{...colorProps}
				{...props}
			>
				<MenuPrimitive.Popup
					className={getContentClassName}
					render={(props, state) => (
						<motion.div
							variants={animationVariants}
							initial="closed"
							animate={state.open ? "open" : "closed"}
							{...(props as MotionProps)}
						/>
					)}
				>
					{children}
				</MenuPrimitive.Popup>
			</MenuPrimitive.Positioner>
		</MenuPrimitive.Portal>
	);
}

function MenuItem({
	className,
	children,
	inset,
	...props
}: React.ComponentProps<typeof MenuPrimitive.Item> & {
	inset?: boolean;
}) {
	const getItemClassName = (state: MenuPrimitive.Item.State) => {
		const resolved = resolveClassName(className)(state);
		return cn(variants().item({ className: resolved }), inset && "pl-8");
	};

	return (
		<MenuPrimitive.Item className={getItemClassName} {...props}>
			{children}
			<div className={variants().arrow()}>
				<ChevronRightIcon />
			</div>
		</MenuPrimitive.Item>
	);
}

function MenuItemIcon({
	className,
	children,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span className={variants().icon({ className })} {...props}>
			{children}
		</span>
	);
}

function MenuItemTitle({
	className,
	children,
	...props
}: React.ComponentProps<"h3">) {
	return (
		<h3 className={variants().title({ className })} {...props}>
			{children}
		</h3>
	);
}

function MenuItemDescription({
	className,
	children,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p className={variants().description({ className })} {...props}>
			{children}
		</p>
	);
}

export const MenuA = {
	Root: MenuPrimitive.Root,
	Trigger: MenuPrimitive.Trigger,
	Content: MenuContent,
	Item: MenuItem,
	ItemIcon: MenuItemIcon,
	ItemTitle: MenuItemTitle,
	ItemDescription: MenuItemDescription,
	Separator: MenuPrimitive.Separator,
};
