import { Link, linkOptions } from "@tanstack/react-router";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
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
	const [open, setOpen] = useState(false);

	return (
		<header
			className={`${open ? "w-80" : "w-80 max-lg:w-20"} duration-300 px-3 py-10 space-y-5 h-fit place-self-center bg-linear-150 from-stone-200 dark:from-stone-900 rounded-xl shadow border-t-2 border-zinc-100 dark:border-zinc-800`}
		>
			<div className={`lg:hidden w-fit ${open ? "ml-auto" : "mx-auto"}`}>
				<button
					type="button"
					className="rounded-full shadow border-t border-l border-zinc-50 dark:border-zinc-700 bg-stone-100 dark:bg-stone-800 p-3 mx-auto"
					onClick={() => setOpen(!open)}
				>
					<BsArrowLeft className={open ? "scale-x-100" : "-scale-x-100"} />
				</button>
			</div>

			<div className={`space-y-2 ${open ? "block" : "max-lg:hidden"}`}>
				<div className="overflow-hidden rounded-full size-40 mx-auto">
					<img src={Insaf} alt="Insaf" />
				</div>

				<h1 className="text-center font-extrabold text-xl">Muhammad Insaf</h1>

				<p className="text-center mx-auto text-sm text-taupe-700 dark:text-taupe-400">
					Your technical partner for fast <span>high-quality</span> web
					application development
				</p>
			</div>

			<div
				className={`${open ? "flex-row" : "max-lg:flex-col"} flex items-center justify-center gap-2`}
			>
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

			<hr className="w-1/2 mx-auto" />

			<nav className={`mx-auto ${open ? "w-60" : "max-lg:w-fit"}`}>
				<ul className="space-y-2">
					{navLinkList.map(({ to, text, Icon }) => (
						<li key={to}>
							<Link
								to={to}
								className={`flex items-center gap-2 rounded-xl duration-300 ${open ? "px-4 py-1" : "p-2"}`}
								inactiveProps={{
									className: "hover:bg-stone-200/50 hover:dark:bg-stone-800/50",
								}}
								activeProps={{
									className: "bg-stone-200 dark:bg-stone-800 shadow",
								}}
							>
								<Icon />
								<span className={open ? "inline" : "max-lg:hidden"}>
									{text}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
