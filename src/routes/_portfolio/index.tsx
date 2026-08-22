import { createFileRoute } from "@tanstack/react-router";
import { BsGit, BsTypescript } from "react-icons/bs";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiDrizzle } from "react-icons/si";

export const Route = createFileRoute("/_portfolio/")({ component: Home });

const specialitiesList = [
	{ Icon: FaNodeJs, name: "Node JS" },
	{ Icon: FaReact, name: "React JS" },
	{ Icon: RiNextjsFill, name: "Next JS" },
	{ Icon: BsTypescript, name: "Typescript" },
	{ Icon: RiTailwindCssFill, name: "Tailwind CSS" },
	{ Icon: DiMongodb, name: "MongoDB" },
	{ Icon: DiPostgresql, name: "PostgresSQL" },
	{ Icon: SiDrizzle, name: "Drizzle ORM" },
	{ Icon: BsGit, name: "Git & GitHub" },
];

function Home() {
	return (
		<main className="h-full flex flex-col justify-center space-y-4 p-3">
			<h2 className="text-mauve-600 dark:text-mauve-400">
				Peace be upon you - السَّلَامُ عَلَيْكُمْ
			</h2>

			<h2 className="text-2xl font-extrabold">Welcome to my portfolio</h2>

			<p>
				I build <span className="italic">user friendly</span> web applications
			</p>

			<div className="p-3 bg-stone-200/20 dark:bg-stone-900/20 rounded-xl border-t border-zinc-100/20 dark:border-zinc-700/20">
				<h4 className="font-bold text-xl">
					Some of my <span className="italic">specialities</span>
				</h4>

				<ul className="flex flex-wrap gap-2 p-4">
					{specialitiesList.map(({ Icon, name }) => (
						<li key={name} className="group/skill relative">
							<Icon size={40} className="hover:rotate-6" />
							<span className="hidden group-hover/skill:inline absolute left-1/2 -bottom-8 -translate-x-1/2 px-2 py-1 rounded-full text-xs text-nowrap font-bold bg-stone-900 text-mauve-200 dark:bg-stone-200 dark:text-mauve-900 before:absolute before:-z-10 before:bg-stone-900 dark:before:bg-stone-200 before:size-5 before:rotate-45 before:-top-1 before:left-1/2 before:-translate-x-1/2">
								{name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
