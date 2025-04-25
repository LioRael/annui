import type { useRender } from "@base-ui-components/react";

export type ButtonProps<Props = {}, State = {}> = useRender.ComponentProps<
	"button",
	State
> &
	Props;
