"use client";

import { PlusIcon } from "lucide-react";

import { HoverExpandButton } from "@/registry/default/buttons/hover-expand-button";

export function HoverExpandButtonVariants() {
	return (
		<div className="flex gap-4">
			<HoverExpandButton.Root color="primary">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root color="default">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root color="success">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root color="warning">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root color="error">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
		</div>
	);
}
