"use client";

import { createContext, useContext } from "react";

export interface UseThemeOptions<Colors = string> {
	theme?: "light" | "dark";
	color?: Colors;
}

export function useTheme(options: UseThemeOptions) {
	return {
		"data-theme": options.theme,
		"data-color": options.color,
	};
}

export const ThemeContext = createContext<UseThemeOptions>({});

export function ThemeProvider({
	children,
	...props
}: React.PropsWithChildren<UseThemeOptions>) {
	return (
		<ThemeContext.Provider value={props}>{children}</ThemeContext.Provider>
	);
}

export function useThemeContext<Colors>() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useThemeContext must be used within a ThemeProvider");
	}
	return context as UseThemeOptions<Colors>;
}
