"use client";

import { PlusIcon, SettingsIcon } from "lucide-react";

import { HoverExpandButton } from "@/registry/default/buttons/hover-expand-button";

export function HoverExpandButtonDoubleSided() {
	return (
		<HoverExpandButton.Root>
			<HoverExpandButton.Icon render={<PlusIcon />} />
			<HoverExpandButton.Text>Button</HoverExpandButton.Text>
			<HoverExpandButton.Icon className="ml-1" render={<SettingsIcon />} />
		</HoverExpandButton.Root>
	);
}
