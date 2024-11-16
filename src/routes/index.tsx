import { clientOnly } from "@solidjs/start";
import Skills from "~/components/sections/Skills";
import About from "~/components/sections/About";

const Landing = clientOnly(() => import("~/components/sections/Landing"));

export default function Home() {
	return (
		<main class="text-white" >
			<Landing />
			<Skills class="z-10" />
			<About class="z-10" />
		</main>
	)
}

