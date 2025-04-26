import { type VariantProps, tv } from "tailwind-variants";

const gridContainerVariants = tv({
	base: [
		"relative",
		"before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10",
		"after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10",
	],
	variants: {
		direction: {
			full: ["before:-left-[100vw]", "after:-left-[100vw]"],
			"to-left": ["before:right-0", "after:right-0"],
			"to-right": ["before:left-0", "after:left-0"],
		},
	},
	defaultVariants: {
		direction: "full",
	},
});

export interface GridContainerProps
	extends VariantProps<typeof gridContainerVariants> {
	children: React.ReactNode;
	className?: string;
}

export default function GridContainer({
	children,
	className,
	direction,
}: GridContainerProps) {
	return (
		<div className={gridContainerVariants({ direction, className })}>
			{children}
		</div>
	);
}
