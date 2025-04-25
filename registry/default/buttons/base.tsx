"use client";

import {
	type UseThemeOptions,
	useTheme,
	useThemeContext,
} from "@/registry/lib/theme";
import { mergeProps, useRender } from "@base-ui-components/react";
import { cva } from "class-variance-authority";
import React from "react";
import type { ButtonProps } from "./types";

const variants = cva(
	[
		"inline-flex items-center justify-center cursor-pointer rounded-md text-sm font-medium",
		"disabled:pointer-events-none disabled:opacity-50",
		"focus-visible:ring-(--button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
		"transition-[color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,box-shadow] duration-300",
	],
	{
		variants: {
			variant: {
				filled: "bg-(--button) text-white hover:bg-(--button-hover)",
				stroke:
					"border border-(--button-stroke) text-(--button) hover:bg-(--button-lighter)",
				lighter:
					"bg-(--button-lighter) text-(--button) hover:bg-(--button-lighter-hover)",
				ghost: "text-(--button) hover:bg-(--button-lighter)",
			},
			color: {
				primary:
					"[--button:var(--color-primary-600)] [--button-hover:var(--color-primary-700)] [--button-stroke:var(--color-primary-600)] [--button-lighter:var(--color-primary-50)] [--button-lighter-hover:var(--color-primary-100)]",
				balance:
					"[--button:var(--color-default-950)] [--button-hover:var(--color-default-800)] [--button-stroke:var(--color-default-600)] [--button-lighter:var(--color-default-50)] [--button-lighter-hover:var(--color-default-100)]",
				success: "",
				error: "",
				warning: "",
			},
			size: {
				sm: "h-8 px-2",
				md: "h-10 px-4",
				lg: "h-12 px-6",
			},
		},
		defaultVariants: {
			variant: "filled",
			size: "md",
			color: "primary",
		},
	},
);

type ButtonColors = "primary" | "balance" | "success" | "warning" | "error";

function ButtonRoot(
	props: ButtonProps<
		{
			variant?: "filled" | "stroke" | "lighter" | "ghost";
			size?: "sm" | "md" | "lg";
		} & UseThemeOptions<ButtonColors>
	>,
) {
	const themeContext = useThemeContext<ButtonColors>();

	const {
		render = <button type="button" />,
		theme = themeContext.theme,
		color = themeContext.color,
		variant,
		size,
		children,
		className,
		...otherProps
	} = props;

	const colorProps = useTheme({
		theme,
		color,
	});

	const { renderElement } = useRender({
		render,
		props: mergeProps<"button">(
			{
				className: variants({
					variant,
					size,
					color,
					className,
				}),
				children,
				...colorProps,
			},
			otherProps,
		),
	});

	return renderElement();
}

function ButtonIcon() {}
