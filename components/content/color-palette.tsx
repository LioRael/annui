import { tv } from "tailwind-variants";

export function ColorPalette() {
	return (
		<div className="flex flex-col gap-4">
			<ColorPaletteGroup
				label="Background"
				colors={
					new Map([
						["50", "var(--color-background-50)"],
						["100", "var(--color-background-100)"],
						["200", "var(--color-background-200)"],
					])
				}
			/>
			<ColorPaletteGroup
				label="Default"
				colors={
					new Map([
						["0", "var(--color-default-0)"],
						["50", "var(--color-default-50)"],
						["100", "var(--color-default-100)"],
						["200", "var(--color-default-200)"],
						["300", "var(--color-default-300)"],
						["400", "var(--color-default-400)"],
						["500", "var(--color-default-500)"],
						["600", "var(--color-default-600)"],
						["700", "var(--color-default-700)"],
						["800", "var(--color-default-800)"],
						["900", "var(--color-default-900)"],
						["950", "var(--color-default-950)"],
						["1000", "var(--color-default-1000)"],
					])
				}
			/>
			<ColorPaletteGroup
				label="Primary"
				colors={
					new Map([
						["50", "var(--color-primary-50)"],
						["100", "var(--color-primary-100)"],
						["200", "var(--color-primary-200)"],
						["300", "var(--color-primary-300)"],
						["400", "var(--color-primary-400)"],
						["500", "var(--color-primary-500)"],
						["600", "var(--color-primary-600)"],
						["700", "var(--color-primary-700)"],
						["800", "var(--color-primary-800)"],
						["900", "var(--color-primary-900)"],
						["950", "var(--color-primary-950)"],
					])
				}
			/>
			<ColorPaletteGroup
				label="Error"
				colors={
					new Map([
						["50", "var(--color-error-50)"],
						["100", "var(--color-error-100)"],
						["200", "var(--color-error-200)"],
						["300", "var(--color-error-300)"],
						["400", "var(--color-error-400)"],
						["500", "var(--color-error-500)"],
						["600", "var(--color-error-600)"],
						["700", "var(--color-error-700)"],
						["800", "var(--color-error-800)"],
						["900", "var(--color-error-900)"],
						["950", "var(--color-error-950)"],
					])
				}
			/>
			<ColorPaletteGroup
				label="Warning"
				colors={
					new Map([
						["50", "var(--color-warning-50)"],
						["100", "var(--color-warning-100)"],
						["200", "var(--color-warning-200)"],
						["300", "var(--color-warning-300)"],
						["400", "var(--color-warning-400)"],
						["500", "var(--color-warning-500)"],
						["600", "var(--color-warning-600)"],
						["700", "var(--color-warning-700)"],
						["800", "var(--color-warning-800)"],
						["900", "var(--color-warning-900)"],
						["950", "var(--color-warning-950)"],
					])
				}
			/>
			<ColorPaletteGroup
				label="Success"
				colors={
					new Map([
						["50", "var(--color-success-50)"],
						["100", "var(--color-success-100)"],
						["200", "var(--color-success-200)"],
						["300", "var(--color-success-300)"],
						["400", "var(--color-success-400)"],
						["500", "var(--color-success-500)"],
						["600", "var(--color-success-600)"],
						["700", "var(--color-success-700)"],
						["800", "var(--color-success-800)"],
						["900", "var(--color-success-900)"],
						["950", "var(--color-success-950)"],
					])
				}
			/>
		</div>
	);
}

function ColorPaletteGroup({
	label,
	colors,
}: {
	label: string;
	colors: Map<string, string>;
}) {
	return (
		<div className="flex flex-col gap-4 prose">
			<h3>{label}</h3>
			<div className="flex flex-wrap items-center gap-4 mt-0 not-prose">
				{Array.from(colors.entries()).map(([key, value]) => (
					<ColorPaletteItem key={key} color={value} label={key} />
				))}
			</div>
		</div>
	);
}

const textColor = tv({
	base: "text-default-0",
	variants: {
		level: {
			0: "text-default-950",
			50: "text-default-950",
			100: "text-default-950",
			200: "text-default-900",
			300: "text-default-800",
			400: "text-default-800",
			500: "text-default-200",
			600: "text-default-200",
			700: "text-default-200",
			800: "text-default-200",
			900: "text-default-200",
			950: "text-default-100",
			1000: "text-default-50",
		},
	},
	defaultVariants: {
		level: 500,
	},
});

export function ColorPaletteItem({
	color,
	label,
}: {
	color: string;
	label: string;
}) {
	const level = Number(label) as
		| 50
		| 100
		| 200
		| 300
		| 400
		| 500
		| 600
		| 700
		| 800
		| 900
		| 950
		| 1000;

	return (
		<div
			className="size-24 rounded-2xl flex flex-col items-center justify-center border border-default-200"
			style={{ backgroundColor: color }}
		>
			<p className={textColor({ level })}>{label}</p>
		</div>
	);
}
