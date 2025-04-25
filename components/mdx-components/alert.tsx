import React from "react";

export function Alert({
	children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
	const childrenWithClassName = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				className:
					"m-0 flex-1 text-sm font-semibold text-gray-950 dark:text-white",
			} as React.ComponentProps<typeof Alert>);
		}
		return child;
	});
	return (
		<div className="-mb-1 flex items-center space-x-2 text-gray-700 dark:text-gray-200">
			<AlertIcon />
			{childrenWithClassName}
		</div>
	);
}

export function AlertIcon({ children }: React.PropsWithChildren) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1"
			stroke="currentColor"
			className="size-6"
		>
			<title>Alert icon</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
			/>
		</svg>
	);
}
