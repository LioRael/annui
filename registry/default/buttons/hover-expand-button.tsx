"use client";

import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

import { cn } from "@/registry/lib/cn";
import { createContext } from "@/registry/lib/context";
import { Button } from "./base";
import { useButtonContext } from "./context";

function HoverExpandButtonRoot({
	className,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Button.Root>) {
	const [isHover, setIsHover] = React.useState(false);

	return (
		<IconHoverButtonProvider value={{ isHover }}>
			<Button.Root
				className={cn("gap-0", className)}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				{...props}
			>
				{children}
			</Button.Root>
		</IconHoverButtonProvider>
	);
}

function HoverExpandButtonText({
	className,
	spanClassName,
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
	spanClassName?: string;
	children?: React.ReactNode;
}) {
	const { isHover } = useIconHoverButtonContext();
	const { size } = useButtonContext();

	const marginMap = {
		sm: "6px",
		md: "8px",
		lg: "10px",
	};

	const variants = {
		initial: {
			width: 0,
			opacity: 0,
			marginLeft: 0,
		},
		animate: {
			width: "auto",
			opacity: 1,
			marginLeft: marginMap[size],
		},
	};

	return (
		<AnimatePresence>
			{isHover && (
				<motion.div
					variants={variants}
					initial="initial"
					animate="animate"
					exit="initial"
					transition={{ duration: 0.4, type: "spring", bounce: 0 }}
					className={cn("overflow-hidden", className)}
					{...props}
				>
					<span className={spanClassName}>{children}</span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

interface ButtonContextValue {
	isHover: boolean;
}

const [IconHoverButtonProvider, useIconHoverButtonContext] =
	createContext<ButtonContextValue>({
		isHover: false,
	});

export const HoverExpandButton = {
	Root: HoverExpandButtonRoot,
	Icon: Button.Icon,
	Text: HoverExpandButtonText,
};
export { useIconHoverButtonContext };
