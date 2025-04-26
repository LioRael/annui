import type { Registry } from "shadcn/registry";

export const lib: Registry["items"] = [
	{
		name: "cn",
		type: "registry:lib",
		dependencies: ["clsx", "tailwind-merge"],
		files: [
			{
				path: "registry/lib/cn.ts",
				type: "registry:lib",
			},
		],
	},
	{
		name: "theme",
		type: "registry:lib",
		files: [
			{
				path: "registry/lib/theme.tsx",
				type: "registry:lib",
			},
		],
	},
	{
		name: "context",
		type: "registry:lib",
		files: [
			{
				path: "registry/lib/context.ts",
				type: "registry:lib",
			},
		],
	},
	{
		name: "resolve-classname",
		type: "registry:lib",
		files: [
			{
				path: "registry/lib/resolve-classname.ts",
				type: "registry:lib",
			},
		],
	},
];
