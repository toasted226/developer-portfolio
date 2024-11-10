import { initTRPC } from "@trpc/server";
import { projects, skills } from "~/cms/cms";

const t = initTRPC.create();

export const appRouter = t.router({
	hello: t.procedure.query(() => {
		return "hello world!";
	}),
	projects: t.procedure.query(() => {
		return projects;
	}),
	skills: t.procedure.query(() => {
		return skills;
	}),
});

export type AppRouter = typeof appRouter;
