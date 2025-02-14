import type { APIEvent } from "@solidjs/start/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "~/lib/router";

const handler = (event: APIEvent) =>
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req: event.request,
		router: appRouter,
		createContext: () => ({})
	});

export const GET = handler;

export const POST = handler;
