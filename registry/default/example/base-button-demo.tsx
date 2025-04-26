"use client";

import { Button } from "@/registry/default/buttons/base";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function BaseButtonDemo() {
	const [count, setCount] = useState(0);

	return (
		<Button.Root onClick={() => setCount(count + 1)}>
			<Button.Icon render={<PlusIcon />} />
			Count: {count}
		</Button.Root>
	);
}
