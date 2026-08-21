import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio/")({ component: Home });

function Home() {
	return <main>I am a full stack web developer</main>;
}
