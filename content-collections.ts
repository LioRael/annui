import { rehypeComponent } from "@/lib/rehype-component";
import { defineCollection, defineConfig } from "@content-collections/core";
import {
	createDocSchema,
	createMetaSchema,
	transformMDX,
} from "@fumadocs/content-collections/configuration";
import { rehypeCode } from "fumadocs-core/mdx-plugins";
import { z } from "zod";

import type { TransformOptions } from "@fumadocs/content-collections/configuration";

const mdxOptions = {
	rehypeCodeOptions: {
		themes: { light: "vesper", dark: "vesper" },
	},
	rehypePlugins: () => [rehypeComponent],
} satisfies TransformOptions;

const docs = defineCollection({
	name: "base",
	directory: "content/base",
	include: "**/*.mdx",
	schema: () => {
		const baseSchema = createDocSchema(z);
		return {
			...baseSchema,
			slogan: z.string().optional(),
		};
	},
	transform: (document, context) => transformMDX(document, context, mdxOptions),
});

const metas = defineCollection({
	name: "meta",
	directory: "content/base",
	include: "**/meta.json",
	parser: "json",
	schema: createMetaSchema,
});

const blog = defineCollection({
	name: "blog",
	directory: "content/blog",
	include: "**/*.mdx",
	schema: createDocSchema,
	transform: (document, context) => transformMDX(document, context, mdxOptions),
});

const blogMeta = defineCollection({
	name: "blogMeta",
	directory: "content/blog",
	include: "**/meta.json",
	parser: "json",
	schema: createMetaSchema,
});

export default defineConfig({
	collections: [docs, metas, blog, blogMeta],
});
