import {
	createFileRoute,
	Outlet,
	useRouteContext,
	useRouter,
} from "@tanstack/react-router";
import { FaMoon, FaSun } from "react-icons/fa";
import { setTheme } from "#/lib/theme";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	const { theme } = useRouteContext({ from: "__root__" });
	const router = useRouter();

	const switchTheme = async () => {
		await setTheme({ data: theme === "dark" ? "light" : "dark" });
		return router.invalidate();
	};

	return (
		<div className="grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] w-screen h-screen overflow-hidden p-2 gap-2">
			<header className="h-fit place-self-center bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100">
				Muhammad Insaf
			</header>

			<main className="h-full bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100">
				<Outlet />
			</main>

			<footer className="text-sm col-span-2 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 flex items-center justify-center gap-5">
				<span>© 2026 Muhammad Insaf</span>

				<button type="button" onClick={switchTheme} className="cursor-pointer">
					{theme === "dark" ? <FaSun /> : <FaMoon />}
				</button>
			</footer>
		</div>
	);
}
