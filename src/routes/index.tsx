import { clientOnly } from "@solidjs/start";
import Footer from "~/components/sections/Footer";
import Skills from "~/components/sections/Skills";

const Landing = clientOnly(() => import("~/components/sections/Landing"));
const About = clientOnly(() => import("~/components/sections/About"));

export default function Home() {
	return (
		<main class="text-white" >
			<Landing />
			<Skills class="z-10" />
			<About class="z-10" />
			<Footer />
		</main>
	)
}

