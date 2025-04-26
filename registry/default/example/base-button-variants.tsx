import { Button } from "@/registry/default/buttons/base";

export default function BaseButtonVariants() {
	return (
		<div className="flex gap-4">
			<Button.Root variant="filled">Filled</Button.Root>
			<Button.Root variant="stroke">Stroke</Button.Root>
			<Button.Root variant="lighter">Lighter</Button.Root>
			<Button.Root variant="ghost">Ghost</Button.Root>
		</div>
	);
}
