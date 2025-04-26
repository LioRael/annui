import { Button } from "@/registry/default/buttons/base";
import { PlusIcon } from "lucide-react";

export default function BaseButtonIcons() {
	return (
		<Button.Root>
			<Button.Icon render={<PlusIcon />} />
			Primary
			<Button.Icon render={<PlusIcon />} />
		</Button.Root>
	);
}
