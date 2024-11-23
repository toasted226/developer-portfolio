import { clientOnly } from "@solidjs/start";
import { createSignal, onMount } from "solid-js";
import { Translate } from "../icons/Translate";
import Music from "../icons/Music";
import CommandLine from "../icons/CommandLine";
import Keyboard from "../icons/Keyboard";

const Hobby = clientOnly(() => import("~/components/Hobby"));

export default function About(props: { class?: string }) {
	let containerRef: HTMLDivElement;
	const [rect, setRect] = createSignal<DOMRect>();

	onMount(() => {
		if (!containerRef) return;
		setRect(containerRef.getBoundingClientRect());
	});

	return (
		<div class={`lg:pb-52 pb-16 ${props.class} lg:h-[448px] h-fit`} id="about">
			<section class="container px-10">
				<h1 class="text-center text-2xl pt-16 pb-7">about</h1>
				<div class="lg:grid lg:grid-cols-2 flex flex-col-reverse">
					<div class="h-full lg:border-r-white lg:border-solid lg:border-r-[1px] text-sm flex justify-center items-center">
						<p class="w-96 max-lg:text-center leading-relaxed">Just a tech nerd - passionate about both human and computer languages. I'm always building creative, fun solutions. Whether it's coding or connecting, I'll bring creativity and technology together. <br/><a href="mailto:keaganncollins@gmail.com" class="underline text-primary">Let’s build something amazing!</a></p>
					</div>
					<div class="relative max-lg:pb-56 max-lg:hidden" ref={(el) => (containerRef = el)}>
						<Hobby svg={Translate} name="languages" desc="I like human languages too!" id={0} rect={rect} />
						<Hobby svg={Music} name="music" id={1} desc="Relaxes the mind and the soul!" rect={rect} />
						<Hobby svg={CommandLine} name="programming" desc="A function a day keeps the doctor away!" id={2} rect={rect} />
						<Hobby svg={Keyboard} size="w-6" name="keyboards" desc="Code in style with a mechanical keyboard!" id={3} rect={rect} />
					</div>
				</div>
			</section>
		</div>
	);
}

