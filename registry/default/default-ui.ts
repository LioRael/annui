import type { Registry } from "shadcn/registry";
import { defaultButtons } from "./buttons/default-buttons";
import { defaultMenus } from "./menus/default-menus";
import { defaultTabs } from "./tabs/default-tabs";

export const defaultUI: Registry["items"] = [
	...defaultButtons,
	...defaultMenus,
	...defaultTabs,
];
