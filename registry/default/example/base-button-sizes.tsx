import { Button } from "@/registry/default/buttons/base";

export default function BaseButtonSizes() {
	return (
		<div className="flex gap-4">
			<Button.Root size="sm">Small</Button.Root>
			<Button.Root size="md">Medium</Button.Root>
			<Button.Root size="lg">Large</Button.Root>
		</div>
	);
}
