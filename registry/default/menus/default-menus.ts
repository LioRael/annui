import type { Registry } from "shadcn/registry";

export const defaultMenus: Registry["items"] = [
	{
		name: "menu-a",
		description: "A menu component",
		type: "registry:component",
		files: [
			{
				path: "registry/default/menus/menu-a.tsx",
				type: "registry:component",
			},
		],
	},
];
