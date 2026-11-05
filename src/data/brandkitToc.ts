import type { NavLink } from "../types/navigation";

/** In-page table of contents for the brandkit reference page. */
export const brandkitToc: NavLink[] = [
	{ href: "#intro", label: "Intro" },
	{
		href: "#atoms",
		label: "Atoms",
		children: [
			{ href: "#atom-heading", label: "Heading" },
			{ href: "#atom-text", label: "Text" },
			{ href: "#atom-button", label: "Button" },
			{ href: "#atom-badge", label: "Badge" },
			{ href: "#atom-input", label: "Input" },
			{ href: "#atom-image", label: "Image" },
			{ href: "#atom-icon", label: "Icon" },
		],
	},
	{
		href: "#molecules",
		label: "Molecules",
		children: [
			{ href: "#molecule-content-block", label: "ContentBlock" },
			{ href: "#molecule-section-heading", label: "SectionHeading" },
			{ href: "#molecule-button-group", label: "ButtonGroup" },
			{ href: "#molecule-icon-text", label: "IconText" },
			{ href: "#molecule-media-block", label: "MediaBlock" },
			{ href: "#molecule-base-card", label: "BaseCard" },
			{ href: "#molecule-feature-card", label: "FeatureCard" },
			{ href: "#molecule-icon-list-item", label: "IconListItem" },
			{ href: "#molecule-form-field", label: "FormField" },
			{ href: "#molecule-service-card", label: "ServiceCard" },
			{ href: "#molecule-testimonial-card", label: "TestimonialCard" },
			{ href: "#molecule-post-card", label: "PostCard" },
			{ href: "#molecule-team-card", label: "TeamCard" },
			{ href: "#molecule-accordion-item", label: "AccordionItem" },
			{ href: "#molecule-breadcrumbs", label: "Breadcrumbs" },
			{ href: "#molecule-logo-group", label: "LogoGroup" },
			{ href: "#molecule-contact-details", label: "ContactDetails" },
		],
	},
	{
		href: "#organisms",
		label: "Organisms",
		children: [
			{ href: "#organism-hero", label: "Hero" },
			{ href: "#organism-cta-banner", label: "CtaBanner" },
			{ href: "#organism-feature-grid", label: "FeatureGrid" },
			{ href: "#organism-media-split", label: "MediaSplit" },
			{ href: "#organism-faq-accordion", label: "FaqAccordion" },
		],
	},
	{
		href: "#content",
		label: "Content",
		children: [
			{ href: "#content-stack", label: "Stack" },
			{ href: "#content-cluster", label: "Cluster" },
			{ href: "#content-grid", label: "Grid" },
		],
	},
];
