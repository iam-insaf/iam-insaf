import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return <h1>Projects</h1>;
}
