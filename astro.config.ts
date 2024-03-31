export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	// TODO Place your site URL here
	// site: "",
	integrations: [
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("@playform/critters-astro")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		(await import("@playform/biome-astro")).default({ Logger: 1 }),
		(await import("@playform/compress-astro")).default({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
}) as typeof defineConfig;

import type { defineConfig } from "astro/config";
