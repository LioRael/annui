"use client";

import { PlusIcon } from "lucide-react";

import { HoverExpandButton } from "@/registry/default/buttons/hover-expand-button";

export function HoverExpandButtonVariants() {
	return (
		<div className="flex gap-4">
			<HoverExpandButton.Root variant="filled">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root variant="stroke">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root variant="lighter">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root variant="ghost">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
		</div>
	);
}
