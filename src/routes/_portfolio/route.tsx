import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<header>Muhammad Insaf</header>
			<Outlet />
			<footer>© 2026 Muhammad Insaf</footer>
		</div>
	);
}
