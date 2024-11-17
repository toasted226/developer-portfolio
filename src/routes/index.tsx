import About from "~/components/sections/About";
import Landing from "~/components/sections/Landing";
import Skills from "~/components/sections/Skills";

export default function Home() {
	return (
		<main class="text-white" >
			<Landing />
			<Skills />
			<About />
		</main>
	)
}

