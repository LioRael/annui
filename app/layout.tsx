import "./global.css"

import type { ReactNode } from "react"
import { Metadata } from "next"
import { RootProvider } from "fumadocs-ui/provider"

import { fontMono, fontSans } from "@/lib/fonts"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/registry/default/lib/utils"

export const metadata: Metadata = {
  title: {
    template: "%s - AnnUI",
    default: "AnnUI - Beautiful React Components",
  },
  description:
    "A collection of customizable and accessible React components built with Radix UI and Tailwind CSS",
  keywords: [
    "React",
    "Components",
    "UI Library",
    "Radix UI",
    "Tailwind CSS",
    "Accessible",
    "Customizable",
  ],
  authors: [
    {
      name: "liorael",
      url: "https://github.com/liorael",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://annui.org",
    title: "AnnUI - Beautiful React Components",
    description:
      "A collection of customizable and accessible React components built with Radix UI and Tailwind CSS",
    siteName: "AnnUI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnnUI - Beautiful React Components",
    description:
      "A collection of customizable and accessible React components built with Radix UI and Tailwind CSS",
    creator: "@lio_rael",
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-svh font-sans antialiased">
        <RootProvider>{children}</RootProvider>
        <Toaster />
      </body>
    </html>
  )
}
