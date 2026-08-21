import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "#/component/Footer";
import Header from "#/component/Header";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] w-screen h-screen overflow-hidden p-3 gap-2 bg-stone-300 text-taupe-900 dark:bg-stone-950 dark:text-taupe-100">
			<Header />

			<main className="h-full">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
