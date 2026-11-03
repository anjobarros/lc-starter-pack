import type { NavLink } from "../types/navigation";

/** In-page TOC for the docs page. */
export const docsToc: NavLink[] = [
	{ href: "#intro", label: "Overview" },
	{
		href: "#created",
		label: "How this starter was created",
		children: [
			{ href: "#heading-purpose", label: "Purpose" },
			{ href: "#heading-standardized", label: "What was standardized" },
			{ href: "#heading-second-brain", label: "Second Brain" },
			{ href: "#heading-brand-kit", label: "Brand Kit" },
		],
	},
	{
		href: "#use",
		label: "How to use it",
		children: [
			{ href: "#heading-install", label: "Install and scripts" },
			{ href: "#heading-project-map", label: "Project map" },
			{ href: "#heading-layout", label: "Layout" },
			{ href: "#heading-components", label: "Components" },
			{ href: "#heading-primitives", label: "Content primitives" },
			{ href: "#heading-spacing", label: "Spacing" },
			{ href: "#heading-navigation", label: "Navigation" },
			{ href: "#heading-collections", label: "Content collections" },
			{ href: "#heading-demo-ui", label: "Where to demo UI" },
		],
	},
	{
		href: "#redesign",
		label: "How to redesign for a client",
		children: [
			{ href: "#heading-context", label: "Project context" },
			{ href: "#heading-tokens", label: "Design tokens" },
			{ href: "#heading-nav-data", label: "Navigation data" },
			{ href: "#heading-atoms", label: "Atoms via variants" },
			{ href: "#heading-compose", label: "Compose sections" },
			{ href: "#heading-content", label: "Sample content" },
			{ href: "#heading-cms", label: "CMS later" },
			{ href: "#heading-a11y", label: "Accessibility" },
		],
	},
	{ href: "#reference", label: "Quick reference" },
];
