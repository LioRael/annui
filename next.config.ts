import { withContentCollections } from "@content-collections/next";

import type { NextConfig } from "next";

const config: NextConfig = {
	reactStrictMode: true,
	outputFileTracingIncludes: {
		registry: ["./registry/**/*"],
	},
};

export default withContentCollections(config);
