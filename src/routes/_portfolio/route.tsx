import { createFileRoute, Outlet } from "@tanstack/react-router";
import Footer from "#/component/Footer";
import Header from "#/component/Header";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] w-screen h-screen overflow-hidden p-3 gap-2">
			<Header />

			<main className="h-full">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
}
