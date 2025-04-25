import type { PageTree } from "fumadocs-core/server";

export type SectionItem = {
	label: string;
	href: string;
	items?: Array<SectionItem>;
};

export type Section = {
	label: string;
	items: Array<SectionItem>;
};

export function convertPageTreeToSection(tree: PageTree.Root) {
	const sections: Array<Section> = [];

	const processNode = (node: PageTree.Node | PageTree.Root) => {
		if ("type" in node && node.type === "folder") {
			const section: Section = {
				label: String(node.name || ""),
				items: [] as Array<{ label: string; href: string; slogan?: string }>,
			};

			if ("index" in node && node.index) {
				section.items.push({
					label: String(node.index.name || ""),
					href: String(node.index.url || ""),
				});
			}

			if ("children" in node && Array.isArray(node.children)) {
				for (const child of node.children) {
					if ("type" in child && child.type === "page") {
						section.items.push({
							label: String(child.name || ""),
							href: String(child.url || ""),
						});
					} else {
						processNode(child);
					}
				}
			}

			if (section.items.length > 0) {
				sections.push(section);
			}
		} else if ("children" in node && Array.isArray(node.children)) {
			for (const child of node.children) {
				processNode(child);
			}
		}
	};

	processNode(tree);
	return sections;
}
