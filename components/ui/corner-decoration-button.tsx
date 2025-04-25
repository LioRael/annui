"use client";

import { mergeProps, useRender } from "@base-ui-components/react";
import React from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/cn";

function CornerDecoration({
	position,
}: {
	position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
	const positionClasses = tv({
		base: "fill-primary-300 dark:fill-primary-300/50 absolute",
		variants: {
			position: {
				"top-left": "top-[-2px] left-[-2px]",
				"top-right": "top-[-2px] right-[-2px]",
				"bottom-left": "bottom-[-2px] left-[-2px]",
				"bottom-right": "right-[-2px] bottom-[-2px]",
			},
		},
	});

	return (
		<svg
			width="5"
			height="5"
			viewBox="0 0 5 5"
			className={positionClasses({ position })}
		>
			<title>Corner decoration</title>
			<path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
		</svg>
	);
}

const CornerDecorationButton = React.forwardRef(
	(
		{
			render = <button type="button" />,
			children,
			className,
			...otherProps
		}: useRender.ComponentProps<"button">,
		forwardedRef: React.ForwardedRef<HTMLElement>,
	) => {
		const defaultProps: useRender.ElementProps<"button"> = {
			className: cn(
				"text-primary-800 dark:text-primary-300 group relative px-1.5 text-sm/6 cursor-pointer",
				className,
			),
			type: "button",
			children: (
				<React.Fragment>
					<span className="border-primary-300/60 bg-primary-400/10 group-hover:bg-primary-400/15 dark:border-primary-300/30 absolute inset-0 border border-dashed" />
					{children}
					<CornerDecoration position="top-left" />
					<CornerDecoration position="top-right" />
					<CornerDecoration position="bottom-left" />
					<CornerDecoration position="bottom-right" />
				</React.Fragment>
			),
		};

		const { renderElement } = useRender({
			render,
			props: mergeProps<"button">(defaultProps, otherProps),
			refs: [forwardedRef],
		});

		return renderElement();
	},
);
CornerDecorationButton.displayName = "CornerDecorationButton";

export { CornerDecoration, CornerDecorationButton };
