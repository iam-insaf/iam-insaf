import { Link, linkOptions } from "@tanstack/react-router";
import { GrInfo, GrProjects } from "react-icons/gr";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { RiShakeHandsLine } from "react-icons/ri";
import Insaf from "#/assets/Insaf.jpg";

const navLinkList = linkOptions([
	{ to: "/", text: "Who am I ?", Icon: GrInfo },
	{ to: "/projects", text: "My projects", Icon: GrProjects },
	{ to: "/hire-me", text: "Hire me", Icon: RiShakeHandsLine },
]);

const socialLinkList = [
	{ href: "https://linkedin.com/in/itsmefminsaf", Icon: ImLinkedin },
	{ href: "https://github.com/iam-insaf", Icon: ImGithub },
];

const Header = () => {
	return (
		<header className="w-80 h-fit place-self-center bg-linear-150 from-stone-200 dark:from-stone-900 rounded-xl shadow px-3 py-10 space-y-5 border-t-2 border-zinc-100 dark:border-zinc-800">
			<div className="overflow-hidden rounded-full size-40 mx-auto">
				<img src={Insaf} alt="Insaf" />
			</div>

			<div>
				<h1 className="text-center font-extrabold text-xl">Muhammad Insaf</h1>

				<p className="text-center text-sm text-taupe-700 dark:text-taupe-400">
					Your technical partner for fast <span>high-quality</span> web
					application development
				</p>
			</div>

			<hr className="w-1/2 mx-auto" />

			<div className="flex items-center justify-center gap-2">
				{socialLinkList.map(({ href, Icon }) => (
					<a
						key={href}
						href={href}
						rel="noreferrer"
						target="_blank"
						className="flex items-center gap-1 text-sm"
					>
						<Icon size={20} className="hover:rotate-6" />
					</a>
				))}
			</div>

			<nav className="w-60 mx-auto">
				<ul className="space-y-2">
					{navLinkList.map(({ to, text, Icon }) => (
						<li key={to}>
							<Link
								to={to}
								className="flex items-center gap-2 px-4 py-1 rounded-xl duration-300"
								inactiveProps={{
									className: "hover:bg-stone-200/50 hover:dark:bg-stone-800/50",
								}}
								activeProps={{
									className: "bg-stone-200 dark:bg-stone-800 shadow",
								}}
							>
								<Icon /> <span>{text}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
