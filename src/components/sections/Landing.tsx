import { createSignal } from "solid-js";
import Nav from "../Nav";
import { JSX } from "solid-js/h/jsx-runtime";


export default function Landing() {
	const [offset, setOffset] = createSignal(0);

	const scrollStyle = (): JSX.CSSProperties => {
		return {transform: `scale(${1 + 2 * offset() / window.innerHeight}) rotateX(${90 * 2 * offset() / window.innerHeight}deg)`, "transform-origin": "center", opacity: `${1 - offset() * 3 / window.innerHeight}`, filter: `blur(${8 * offset() / window.innerHeight}px)`};
	}

	document.addEventListener("scroll", () => {
		setOffset(window.scrollY);

	});

	return (
		<div class="sticky top-0 -z-10">
			<section class="w-full h-screen relative">
				<Nav style={scrollStyle()}/>
				<header class="w-full h-full flex flex-col justify-center">
					<div class="ml-[50vw] text-3xl w-fit" style={scrollStyle()}>
						<h1 class="mb-4">I'm Keagan</h1>
						<h1 class="italic flex items-center">
							Less Talk, 
							<span class="text-primary underline mx-2">More Tech.</span>
							<div class="h-7 w-4 rounded-full border-primary border-2 ml-1 flex justify-center py-2">
								<div class="h-1 w-1 rounded-full bg-primary animate-bounce"></div>
							</div>
						</h1>
					</div>
				</header>
			</section>
		</div>
	)
}

