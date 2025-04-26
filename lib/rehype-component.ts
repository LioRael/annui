import fs from "node:fs";
import type { UnistNode } from "@/types/unist";
import { rehypeCode } from "fumadocs-core/mdx-plugins";
import type { Root } from "hast";
import type { Processor, Transformer } from "unified";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { Index } from "../__registry__";
import { styles } from "../registry/registry-styles";

export function rehypeComponent(this: Processor): Transformer<Root, Root> {
	const transformer = rehypeCode.call(this, {
		themes: { light: "vesper", dark: "vesper" },
	});
	return async (tree, data) => {
		visit(tree, { name: "ComponentSource" }, (node: UnistNode) => {
			// src prop overrides both name and fileName.
			const srcPath = getNodeAttributeByName(node, "src")?.value as string;

			const name = getNodeAttributeByName(node, "name")?.value as string;
			const fileName = getNodeAttributeByName(node, "fileName")?.value as
				| string
				| undefined;

			if (!name && !srcPath) {
				return null;
			}

			try {
				for (const s of styles) {
					let src: string;

					if (srcPath) {
						src = srcPath;
					} else {
						const component = Index[s.name][name];
						src = fileName
							? component.files.find((file: string) => {
									return (
										file.endsWith(`${fileName}.tsx`) ||
										file.endsWith(`${fileName}.ts`)
									);
								}) || component.files[0]?.path
							: component.files[0]?.path;
					}

					// Read the source file.
					const filePath = src;
					let source = fs.readFileSync(filePath, "utf8");

					// Replace imports.
					// TODO: Use @swc/core and a visitor to replace this.
					// For now a simple regex should do.
					source = source.replaceAll(`@/registry/${s.name}/`, "@/components/");
					source = source.replaceAll("export default", "export");

					// Add code as children so that rehype can take over at build time.
					node.children?.push(
						u("element", {
							tagName: "pre",
							properties: {
								__src__: src,
								__style__: s.name,
							},
							attributes: [
								{
									name: "styleName",
									type: "mdxJsxAttribute",
									value: s.name,
								},
							],
							children: [
								u("element", {
									tagName: "code",
									properties: {
										className: ["language-tsx"],
									},
									children: [
										{
											type: "text",
											value: source,
										},
									],
								}),
							],
						}),
					);
				}
			} catch (error) {
				console.error(error);
			}
		});

		visit(tree, { name: "ComponentPreview" }, (node: UnistNode) => {
			const name = getNodeAttributeByName(node, "name")?.value as string;

			if (!name) {
				return null;
			}

			try {
				for (const s of styles) {
					const component = Index[name];
					const src = component.files[0]?.path;

					// Read the source file.
					const filePath = src;
					let source = fs.readFileSync(filePath, "utf8");

					// Replace imports.
					// TODO: Use @swc/core and a visitor to replace this.
					// For now a simple regex should do.
					source = source.replaceAll(`@/registry/${s.name}/`, "@/components/");
					source = source.replaceAll("export default", "export");

					// Add code as children so that rehype can take over at build time.
					node.children?.push(
						u("element", {
							tagName: "pre",
							properties: {
								__src__: src,
								__style__: s.name,
							},
							children: [
								u("element", {
									tagName: "code",
									properties: {
										className: ["language-tsx"],
									},
									children: [
										{
											type: "text",
											value: source,
										},
									],
								}),
							],
						}),
					);
				}
			} catch (error) {
				console.error(error);
			}
		});

		if (transformer) {
			await transformer.call(this, tree, data, () => {});
		}
	};
}

function getNodeAttributeByName(node: UnistNode, name: string) {
	return node.attributes?.find((attribute) => attribute.name === name);
}
