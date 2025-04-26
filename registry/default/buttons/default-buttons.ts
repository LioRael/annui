import type { Registry } from "shadcn/registry";

export const defaultButtons: Registry["items"] = [
	{
		name: "button-context",
		description: "Context for button components",
		type: "registry:lib",
		files: [
			{
				path: "registry/default/buttons/context.ts",
				type: "registry:lib",
			},
		],
	},
	{
		name: "button-types",
		description: "Types for button components",
		type: "registry:lib",
		files: [
			{
				path: "registry/default/buttons/types.ts",
				type: "registry:lib",
			},
		],
	},
	{
		name: "base-button",
		description: "A button component",
		type: "registry:component",
		registryDependencies: ["button-context", "button-types"],
		files: [
			{
				path: "registry/default/buttons/base.tsx",
				type: "registry:component",
			},
		],
	},
	{
		name: "hover-expand-button",
		description: "A button component with hover expand",
		type: "registry:component",
		dependencies: ["motion"],
		registryDependencies: ["base-button"],
		files: [
			{
				path: "registry/default/buttons/hover-expand-button.tsx",
				type: "registry:component",
			},
		],
	},
];
