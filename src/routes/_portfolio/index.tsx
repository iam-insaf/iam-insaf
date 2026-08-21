import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio/")({ component: Home });

function Home() {
	return <h1>I am a full stack web developer</h1>;
}
