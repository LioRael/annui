import { Button } from "@/registry/default/buttons/base";

export default function BaseButtonColors() {
	return (
		<div className="flex gap-4">
			<Button.Root color="primary">Primary</Button.Root>
			<Button.Root color="default">Balance</Button.Root>
			<Button.Root color="success">Success</Button.Root>
			<Button.Root color="warning">Warning</Button.Root>
			<Button.Root color="error">Error</Button.Root>
		</div>
	);
}
