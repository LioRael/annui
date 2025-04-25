export function Card({ children }: React.PropsWithChildren) {
	return (
		<div className="border border-gray-200/60 rounded-xl overflow-hidden p-1.5 max-w-144 text-heading-72">
			<div className="bg-background-200 border border-gray-200 rounded-[calc(var(--radius-xl)-(--spacing(1.5)))] px-4 py-3">
				{children}
			</div>
		</div>
	);
}

export function CardTitle({ children }: React.PropsWithChildren) {
	return <div className="text-2xl">{children}</div>;
}

export function CardDescription({ children }: React.PropsWithChildren) {
	return <div className="text-xl">{children}</div>;
}
