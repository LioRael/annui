"use client";

import { PlusIcon } from "lucide-react";

import { HoverExpandButton } from "@/registry/default/buttons/hover-expand-button";

export function HoverExpandButtonSizes() {
	return (
		<div className="flex gap-4">
			<HoverExpandButton.Root size="sm">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root size="md">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
			<HoverExpandButton.Root size="lg">
				<HoverExpandButton.Icon render={<PlusIcon />} />
				<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			</HoverExpandButton.Root>
		</div>
	);
}
