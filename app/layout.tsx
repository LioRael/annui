import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import Script from "next/script";

import "./styles/global.css";

import type { Metadata } from "next";

const inter = localFont({
	src: [
		{ path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" },
		{
			path: "./fonts/InterVariable-Italic.woff2",
			weight: "100 900",
			style: "italic",
		},
	],
	variable: "--font-inter",
});

const source = localFont({
	src: [
		{
			path: "./fonts/SourceSansPro-Regular.ttf.woff2",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-source-sans-pro",
});

const plexMono = localFont({
	src: [
		{
			path: "./fonts/IBMPlexMono-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/IBMPlexMono-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/IBMPlexMono-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/IBMPlexMono-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/IBMPlexMono-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/IBMPlexMono-SemiBoldItalic.woff2",
			weight: "600",
			style: "italic",
		},
	],
	variable: "--font-plex-mono",
});
const ubuntuMono = localFont({
	src: [
		{
			path: "./fonts/Ubuntu-Mono-bold.woff2",
			weight: "600",
			style: "normal",
		},
	],
	variable: "--font-ubuntu-mono",
});

const js = String.raw;
const systemScript = js`
  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add("os-macos")
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
	metadataBase: new URL("https://taildocs.vercel.app"),
	title: {
		default:
			"Taildocs - A Tailwind CSS styled documentation site powered by Fumadocs.",
		template: "%s - Taildocs",
	},
	description:
		"Taildocs is a Tailwind CSS styled documentation site powered by Fumadocs.",
};

export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${plexMono.variable} ${source.variable} ${ubuntuMono.variable} antialiased dark:bg-gray-950`}
			suppressHydrationWarning
		>
			<head>
				<script
					type="text/javascript"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: systemScript }}
				/>
				{/*
          We inject the script via the <Script/> tag again, since we found the regular `<script>`
          tag to not execute when rendering a not-found page.
         */}
				<Script src={`data:text/javascript;base64,${btoa(systemScript)}`} />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="isolate">{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
