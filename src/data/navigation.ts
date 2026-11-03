import type { NavGroup, NavLink } from "../types/navigation";

/** Site brand used by Header / Footer. */
export const siteBrand: NavLink = {
	href: "/",
	label: "Starter",
};

/** Primary header navigation. */
export const mainNav: NavLink[] = [
	{ href: "/", label: "Home" },
	{ href: "/docs", label: "Docs" },
	{ href: "/brandkit", label: "Brand Kit" },
];

/** Footer link groups. */
export const footerNav: NavGroup[] = [
	{
		title: "Explore",
		links: [
			{ href: "/", label: "Home" },
			{ href: "/docs", label: "Docs" },
			{ href: "/brandkit", label: "Brand Kit" },
		],
	},
];

/** Social / external profiles. */
export const socialLinks: NavLink[] = [
	{ href: "https://example.com", label: "Website" },
];

/** Legal / compliance links (footer). */
export const legalLinks: NavLink[] = [
	{ href: "/privacy", label: "Privacy" },
	{ href: "/terms", label: "Terms" },
	{ href: "/cookies", label: "Cookies" },
	{ href: "/accessibility", label: "Accessibility" },
];
