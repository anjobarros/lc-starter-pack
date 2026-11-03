/**
 * Normalize a path-like string for internal links (leading slash, no trailing slash except root).
 */
export function normalizePath(path: string): string {
	if (!path || path === "/") return "/";
	const withSlash = path.startsWith("/") ? path : `/${path}`;
	return withSlash.replace(/\/+$/, "") || "/";
}
