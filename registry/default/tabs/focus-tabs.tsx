"use client";

import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { useControlled } from "@base-ui-components/react/utils";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { createContext } from "@/registry/lib/context";

const Tabs = React.forwardRef<
	React.ComponentRef<typeof TabsPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ value, defaultValue, ...props }, ref) => {
	const [activeTab, setActiveTab] = useControlled({
		controlled: value,
		default: defaultValue,
		name: "Tabs",
	});

	return (
		<TabsProvider value={{ activeTab, setActiveTab }}>
			<TabsPrimitive.Root
				ref={ref}
				value={activeTab}
				onValueChange={setActiveTab}
				{...props}
			/>
		</TabsProvider>
	);
});
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
	React.ComponentRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			"inline-flex h-8 items-center justify-center gap-2",
			className,
		)}
		{...props}
	>
		{children}
	</TabsPrimitive.List>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTab = React.forwardRef<
	React.ComponentRef<typeof TabsPrimitive.Tab>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Tab>
>(({ className, children, value, ...props }, ref) => {
	return (
		<TabProvider value={{ value }}>
			<TabsPrimitive.Tab
				ref={ref}
				className={cn(
					"group h-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-default-100 text-default-900",
					className,
				)}
				value={value}
				{...props}
			>
				{children}
			</TabsPrimitive.Tab>
		</TabProvider>
	);
});
TabsTab.displayName = TabsPrimitive.Tab.displayName;

const TabsTabIcon = React.forwardRef<
	React.ComponentRef<"span">,
	React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn("[&>svg]:w-4 [&>svg]:h-4", className)}
		{...props}
	/>
));
TabsTabIcon.displayName = "TabsTabIcon";

const TabsTabText = React.forwardRef<
	React.ComponentRef<typeof motion.div>,
	React.ComponentPropsWithoutRef<typeof motion.div> & {
		children?: React.ReactNode;
	}
>(({ className, children, ...props }, ref) => {
	const { activeTab } = useTabsContext();
	const { value } = useTabContext();

	const isActive = value === activeTab;

	const variants = {
		initial: {
			width: 0,
			opacity: 0,
		},
		animate: { width: "auto", opacity: 1 },
	};

	return (
		<AnimatePresence initial={false}>
			{isActive && (
				<motion.div
					ref={ref}
					variants={variants}
					initial="initial"
					animate="animate"
					exit="initial"
					transition={{ duration: 0.4, type: "spring", bounce: 0 }}
					className={cn("overflow-hidden", className)}
					{...props}
				>
					<span className="ml-1">{children}</span>
				</motion.div>
			)}
		</AnimatePresence>
	);
});
TabsTabText.displayName = "TabsTabText";

const TabsPanel = React.forwardRef<
	React.ComponentRef<typeof TabsPrimitive.Panel>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Panel>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.Panel
		ref={ref}
		className={cn(
			"mt-2 transition-shadow ring-offset-background-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default-950 focus-visible:ring-offset-2",
			className,
		)}
		{...props}
	/>
));
TabsPanel.displayName = TabsPrimitive.Panel.displayName;

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

export const FocusTabs = {
	Root: Tabs,
	List: TabsList,
	Tab: TabsTab,
	TabIcon: TabsTabIcon,
	TabText: TabsTabText,
	Panel: TabsPanel,
};

export { useTabsContext, useTabContext };
