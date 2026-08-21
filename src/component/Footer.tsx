import { useRouteContext, useRouter } from "@tanstack/react-router";
import { FaMoon, FaSun } from "react-icons/fa";
import { setTheme } from "#/lib/theme";

const Footer = () => {
	const { theme } = useRouteContext({ from: "__root__" });
	const router = useRouter();

	const switchTheme = async () => {
		await setTheme({ data: theme === "dark" ? "light" : "dark" });
		return router.invalidate();
	};

	return (
		<footer className="text-sm col-span-2 flex items-center justify-center gap-5">
			<span>© 2026 Muhammad Insaf</span>

			<button type="button" onClick={switchTheme} className="cursor-pointer">
				{theme === "dark" ? <FaSun /> : <FaMoon />}
			</button>
		</footer>
	);
};

export default Footer;
