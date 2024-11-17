import { createSignal, For, onMount } from "solid-js";
import Nav from "../Nav";
import anime from 'animejs/lib/anime.es.js';

export default function Landing() {
	const [isAnimating, setIsAnimating] = createSignal(false);

	const text = "More Tech.";
	let highlight: HTMLSpanElement[] = [];

	for (let i = 0; i < text.length; i++) {
		highlight.push(<span class="inline-block">{text.charAt(i)}</span> as HTMLSpanElement);
	}

	const bounceLetters = (index = 0) => {
		console.log('called heer!!')
		if ((index === 0 && !isAnimating) || index < highlight.length) {
			setIsAnimating(true);
			setTimeout(() => {
				anime({
					targets: highlight[index],
					translateY: [0, -5, 0],
					duration: 800
				});
				index++;
				bounceLetters(index);
			}, 100);
		} else {
			setIsAnimating(false);
		}
	};

	return (
		<div>
			<section class="w-full h-screen relative">
				<Nav />
				<header class="w-full h-full flex flex-col justify-center items-center">
					<div class="text-5xl w-fit flex flex-col items-center gap-3">
						<h1 class="mb-4">I'm Keagan</h1>
						<h1 class="italic flex items-center">
							Less Talk,
							<span class="flex flex-col">
								<span class="text-primary mx-2 cursor-pointer" onMouseEnter={() => bounceLetters()}>
									{highlight}
								</span>
								<div class="h-1 w-[95%] mx-auto bg-primary"></div>
							</span>
						</h1>
					</div>
					<div class="relative top-40 scale-125 h-7 w-4 rounded-full border-primary border-2 ml-1 flex justify-center py-2">
						<div class="h-1 w-1 rounded-full bg-primary animate-bounce"></div>
					</div>
				</header>
			</section>
		</div>
	)
}

