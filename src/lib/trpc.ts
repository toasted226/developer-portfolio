import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./router";

export const client = createTRPCClient<AppRouter>({
	links: [httpBatchLink({ url: "https://keagan-dev-portfolio.vercel.app/api/trpc/" })]
});
