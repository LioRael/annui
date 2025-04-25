"use client";

import type { Section } from "@/lib/section";
import { sections } from "@/lib/source";
import { createContext, useContext } from "react";

export const SectionContext = createContext<Array<Section>>([]);

export function SectionsProvider({ children }: React.PropsWithChildren) {
	return (
		<SectionContext.Provider value={sections}>
			{children}
		</SectionContext.Provider>
	);
}

export function useSections() {
	return useContext(SectionContext);
}
