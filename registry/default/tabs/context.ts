import { createContext } from "@/registry/lib/context";

interface TabsContextValue {
	activeTab: string | undefined;
	setActiveTab: (value: string) => void;
}

interface TabContextValue {
	value: string | undefined;
}

const [TabsProvider, useTabsContext] = createContext<TabsContextValue>({
	activeTab: undefined,
	setActiveTab: () => {},
});

const [TabProvider, useTabContext] = createContext<TabContextValue>({
	value: undefined,
});

export { TabsProvider, TabProvider, useTabsContext, useTabContext };
