import { createContext } from "@/registry/lib/context";

type ButtonColors = "primary" | "default" | "success" | "warning" | "error";
type ButtonSizes = "sm" | "md" | "lg";
type ButtonVariants = "filled" | "stroke" | "lighter" | "ghost";
type ButtonContextType = {
	theme: "light" | "dark";
	color: ButtonColors;
	size: ButtonSizes;
	variant: ButtonVariants;
};

const [ButtonContextProvider, useButtonContext] =
	createContext<ButtonContextType>({
		theme: "light",
		color: "default",
		size: "md",
		variant: "filled",
	});

export { ButtonContextProvider, useButtonContext };

export type { ButtonContextType, ButtonColors, ButtonSizes, ButtonVariants };
