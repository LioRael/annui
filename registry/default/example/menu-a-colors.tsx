"use client";

import {
	ChevronDownIcon,
	ChevronRightIcon,
	HomeIcon,
	LogOutIcon,
	SettingsIcon,
} from "lucide-react";

import { Button } from "@/registry/default/buttons/base";
import { MenuA } from "@/registry/default/menus/menu-a";

export function MenuAColors() {
	return (
		<div className="flex gap-4">
			<MenuAColor color="primary" />
			<MenuAColor color="default" />
			<MenuAColor color="error" />
			<MenuAColor color="warning" />
			<MenuAColor color="success" />
		</div>
	);
}

function MenuAColor({
	color,
}: { color: "primary" | "default" | "error" | "warning" | "success" }) {
	return (
		<MenuA.Root>
			<MenuA.Trigger
				className="capitalize"
				render={<Button.Root color={color} />}
			>
				{color}
			</MenuA.Trigger>
			<MenuA.Content color={color}>
				<MenuA.Item>
					<MenuA.ItemIcon>
						<HomeIcon />
					</MenuA.ItemIcon>
					<MenuA.ItemTitle>Home</MenuA.ItemTitle>
					<MenuA.ItemDescription>Home page</MenuA.ItemDescription>
				</MenuA.Item>
				<MenuA.Item>
					<MenuA.ItemIcon>
						<SettingsIcon />
					</MenuA.ItemIcon>
					<MenuA.ItemTitle>Settings</MenuA.ItemTitle>
					<MenuA.ItemDescription>Settings page</MenuA.ItemDescription>
				</MenuA.Item>
				<MenuA.Item>
					<MenuA.ItemIcon>
						<ChevronRightIcon />
					</MenuA.ItemIcon>
					<MenuA.ItemTitle>More</MenuA.ItemTitle>
					<MenuA.ItemDescription>More page</MenuA.ItemDescription>
				</MenuA.Item>
				<MenuA.Separator />
				<MenuA.Item>
					<MenuA.ItemIcon>
						<LogOutIcon />
					</MenuA.ItemIcon>
					<MenuA.ItemTitle>Logout</MenuA.ItemTitle>
					<MenuA.ItemDescription>Logout page</MenuA.ItemDescription>
				</MenuA.Item>
			</MenuA.Content>
		</MenuA.Root>
	);
}
