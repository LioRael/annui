import { Alert } from "./alert";
import { Anchor } from "./anchor";
import { CodeBlock, Pre } from "./codeblock";
import { ComponentPreview } from "./component-preview";
import { Heading } from "./heading";
import { Step, StepContent, StepDescription, StepTitle, Steps } from "./step";
import { Tab, TabDescription, Tabs } from "./tab";

import type { motion } from "motion/react";
import type { HTMLAttributes } from "react";

export const mdxComponents = {
	pre: (props: HTMLAttributes<HTMLPreElement>) => (
		<CodeBlock
			className="rounded-xl bg-gray-950 in-data-stack:mt-0 in-data-stack:rounded-none in-[figure]:-mx-1 in-[figure]:-mb-1 in-data-stack:[:first-child>&]:rounded-t-xl in-data-stack:[:first-child>&]:*:rounded-t-xl in-data-stack:[:last-child>&]:rounded-b-xl in-data-stack:[:last-child>&]:*:rounded-b-xl"
			{...props}
		>
			<Pre>{props.children}</Pre>
		</CodeBlock>
	),

	img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
		const { alt, ...rest } = props;
		return <img className="rounded-lg" {...rest} alt={alt} />;
	},

	a: (props: React.ComponentProps<typeof motion.a>) => <Anchor {...props} />,

	h1: (props: React.ComponentProps<typeof Heading>) => (
		<Heading as="h1" {...props} />
	),
	h2: (props: React.ComponentProps<typeof Heading>) => (
		<Heading as="h2" {...props} />
	),

	h3: (props: React.ComponentProps<typeof Heading>) => (
		<Heading as="h3" {...props} />
	),

	h4: (props: React.ComponentProps<typeof Heading>) => (
		<Heading as="h4" {...props} />
	),

	h5: (props: React.ComponentProps<typeof Heading>) => (
		<Heading as="h5" {...props} />
	),

	h6: (props: React.ComponentProps<typeof Heading>) => (
		<Heading as="h6" {...props} />
	),

	Tabs,
	Tab,
	TabDescription,

	Steps,
	Step,
	StepTitle,
	StepDescription,
	StepContent,

	Alert,

	ComponentPreview,
};
