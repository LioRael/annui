import { Link } from "lucide-react";

import { cn } from "@/lib/cn";

type Types = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps<T extends Types> = Omit<
	React.ComponentPropsWithoutRef<T>,
	"as"
> & {
	as?: T;
};

export function Heading<T extends Types = "h1">({
	as,
	className,
	...props
}: HeadingProps<T>): React.ReactElement {
	const As = as ?? "h1";

	if (!props.id) return <As className={className} {...props} />;

	return (
		<As
			className={cn("flex flex-row items-center gap-2", className)}
			{...props}
		>
			<a data-card="" href={`#${props.id}`} className="peer">
				{props.children}
			</a>
			<Link
				aria-label="Link to section"
				className="text-fd-muted-foreground mt-0 size-3.5 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100"
			/>
		</As>
	);
}
