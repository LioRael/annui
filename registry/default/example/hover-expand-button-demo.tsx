"use client";

import { PlusIcon } from "lucide-react";

import { HoverExpandButton } from "@/registry/default/buttons/hover-expand-button";

export function HoverExpandButtonDemo() {
	return (
		<HoverExpandButton.Root>
			<HoverExpandButton.Icon render={<PlusIcon />} />
			<HoverExpandButton.Text>Button</HoverExpandButton.Text>
		</HoverExpandButton.Root>
	);
}
