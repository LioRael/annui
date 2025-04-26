import type { Registry } from "shadcn/registry";
import { defaultButtons } from "./buttons/default-buttons";

export const defaultUI: Registry["items"] = [...defaultButtons];
