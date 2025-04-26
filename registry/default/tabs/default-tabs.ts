import type { Registry } from "shadcn/registry";

export const defaultTabs: Registry["items"] = [
	{
		name: "tabs-context",
		description: "Context for tabs components",
		type: "registry:lib",
		files: [
			{
				path: "registry/default/tabs/context.ts",
				type: "registry:lib",
			},
		],
	},

	{
		name: "base-tabs",
		description: "A tabs component",
		type: "registry:component",
		registryDependencies: ["tabs-context"],
		files: [
			{
				path: "registry/default/tabs/base.tsx",
				type: "registry:component",
			},
		],
	},
	{
		name: "focus-tabs",
		description: "A tabs component with focus",
		type: "registry:component",
		registryDependencies: ["base-tabs"],
		files: [
			{
				path: "registry/default/tabs/focus-tabs.tsx",
				type: "registry:component",
			},
		],
	},
];
