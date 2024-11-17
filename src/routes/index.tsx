import { clientOnly } from "@solidjs/start";
import Skills from "~/components/sections/Skills";

const Landing = clientOnly(() => import("~/components/sections/Landing"));
const About = clientOnly(() => import("~/components/sections/About"));

export default function Home() {
	return (
		<main class="text-white" >
			<Landing />
			<Skills class="z-10" />
			<About class="z-10" />
		</main>
	)
}

