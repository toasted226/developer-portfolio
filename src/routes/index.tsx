import Footer from "~/components/sections/Footer";
import Landing from "~/components/sections/Landing";
import Skills from "~/components/sections/Skills";
import About from "~/components/sections/About";
import { Meta, MetaProvider, Title } from "@solidjs/meta";

export default function Home() {
	return (
		<>
		<MetaProvider>
			<Meta name="description" content="Developer portfolio of Keagan Collins" />
			<Title>Keagan's Portfolio</Title>
		</MetaProvider>
		<main class="text-white scroll-smooth">
			<Landing />
			<Skills class="z-10" />
			<About class="z-10" />
			<Footer />
		</main>
		</>
	)
}

