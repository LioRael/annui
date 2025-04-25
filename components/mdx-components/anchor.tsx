"use client";

import { motion } from "motion/react";

export function Anchor(props: React.ComponentProps<typeof motion.a>) {
	return (
		<motion.a
			initial={{ textDecorationThickness: "1px" }}
			whileHover={{ textDecorationThickness: "2.5px" }}
			transition={{
				duration: 0.25,
				ease: "easeInOut",
			}}
			{...props}
		/>
	);
}
