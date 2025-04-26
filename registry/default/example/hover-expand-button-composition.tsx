"use client";

import { PlusIcon } from "lucide-react";

import { HoverExpandButton } from "@/registry/default/buttons/hover-expand-button";
import Link from "next/link";

export function HoverExpandButtonDemo() {
	return (
		<HoverExpandButton.Root render={<Link href="/" />}>
			<HoverExpandButton.Icon render={<PlusIcon />} />
			<HoverExpandButton.Text>Button</HoverExpandButton.Text>
		</HoverExpandButton.Root>
	);
}
