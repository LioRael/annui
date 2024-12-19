import { Metadata } from "next"
import { notFound } from "next/navigation"
import defaultMdxComponents from "fumadocs-ui/mdx"
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page"

import { source } from "@/lib/source"
import { components } from "@/components/mdx-components"

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        style: "clerk",
      }}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-4">
        {page.data.description}
      </DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, ...components }} />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const page = source.getPage(slug)

  if (!page) notFound()

  const description =
    page.data.description ??
    "A collection of reusable React components that you can copy and paste into your web apps."

  return {
    title: page.data.title,
    description,
    openGraph: {
      title: page.data.title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: page.data.title,
      description,
    },
  }
}
