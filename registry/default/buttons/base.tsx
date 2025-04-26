"use client";

import {
	type UseThemeOptions,
	useTheme,
	useThemeContext,
} from "@/registry/lib/theme";
import { mergeProps, useRender } from "@base-ui-components/react";
import React from "react";
import { tv } from "tailwind-variants";
import {
	type ButtonColors,
	ButtonContextProvider,
	type ButtonSizes,
	type ButtonVariants,
	useButtonContext,
} from "./context";
import type { ButtonIconProps, ButtonProps } from "./types";

const variants = tv({
	slots: {
		root: [
			"inline-flex items-center justify-center cursor-pointer rounded-md text-sm font-medium",
			"disabled:pointer-events-none disabled:opacity-50",
			"focus-visible:ring-(--button) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
			"transition duration-200 ease-out",
		],
		icon: undefined,
	},
	variants: {
		variant: {
			filled: {
				root: "bg-(--button) text-white hover:bg-(--button-hover)",
			},
			stroke: {
				root: "ring ring-inset ring-(--button-stroke) text-(--button) hover:bg-(--button-lighter)",
			},
			lighter: {
				root: "bg-(--button-lighter) text-(--button) hover:bg-(--button-lighter-hover)",
			},
			ghost: {
				root: "text-(--button) hover:bg-(--button-lighter)",
			},
		},
		color: {
			primary: {
				root: "[--button:var(--color-primary-600)] [--button-hover:var(--color-primary-700)] [--button-stroke:var(--color-primary-600)] [--button-lighter:var(--color-primary-50)] [--button-lighter-hover:var(--color-primary-100)]",
			},
			default: {
				root: "[--button:var(--color-default-950)] [--button-hover:var(--color-default-800)] [--button-stroke:var(--color-default-600)] [--button-lighter:var(--color-default-100)] [--button-lighter-hover:var(--color-default-200)]",
			},
		},
		size: {
			sm: {
				root: "h-8 gap-1.5 rounded-lg px-2.5 text-sm",
				icon: "-mx-1 size-4",
			},
			md: {
				root: "h-9 gap-2 rounded-lg px-3 text-sm",
				icon: "-mx-1 size-5",
			},
			lg: {
				root: "h-10 gap-2.5 rounded-10 px-3.5 text-sm",
				icon: "-mx-1 size-5",
			},
		},
	},
	compoundVariants: [
		{
			variant: "filled",
			color: "default",
			class: {
				root: "dark:text-default-100",
			},
		},
	],
	defaultVariants: {
		variant: "filled",
		size: "md",
		color: "default",
	},
});

function ButtonRoot(
	props: ButtonProps<
		{
			variant?: ButtonVariants;
			size?: ButtonSizes;
		} & UseThemeOptions<ButtonColors>
	>,
) {
	const themeContext = useThemeContext<ButtonColors>();

	const {
		render = <button type="button" />,
		theme = themeContext.theme || "light",
		color = themeContext.color || "default",
		variant = "filled",
		size = "md",
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
					color: color === "default" ? "default" : "primary",
				}).root({
					className,
				}),
				children,
				...colorProps,
			},
			otherProps,
		),
	});

	const hasIcon = React.Children.toArray(children).some(
		(child) => React.isValidElement(child) && child.type === ButtonIcon,
	);

	return hasIcon ? (
		<ButtonContextProvider value={{ theme, color, variant, size }}>
			{renderElement()}
		</ButtonContextProvider>
	) : (
		renderElement()
	);
}

function ButtonIcon(props: ButtonIconProps) {
	const { render = <span />, className, ...otherProps } = props;
	const { size } = useButtonContext();

	const { renderElement } = useRender({
		render,
		props: mergeProps<"span">({
			className: variants({
				size,
			}).icon({
				className,
			}),
			...otherProps,
		}),
	});

	return renderElement();
}

export { variants as buttonVariants };

export const Button = {
	Root: ButtonRoot,
	Icon: ButtonIcon,
};
