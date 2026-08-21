import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] w-screen h-screen overflow-hidden p-2 gap-2">
			<header className="h-fit place-self-center bg-neutral-100">
				Muhammad Insaf
			</header>
			<main className="h-full bg-neutral-100">
				<Outlet />
			</main>
			<footer className="col-span-2 bg-neutral-100">
				© 2026 Muhammad Insaf
			</footer>
		</div>
	);
}
