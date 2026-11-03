export interface NavLink {
	href: string;
	label: string;
	children?: NavLink[];
}

export interface NavGroup {
	title: string;
	links: NavLink[];
}
