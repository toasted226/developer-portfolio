import { Component, ComponentProps, createEffect, createSignal, onCleanup, onMount, splitProps } from "solid-js";
import { Translate } from "../icons/Translate";
import Music from "../icons/Music";
import CommandLine from "../icons/CommandLine";
import Keyboard from "../icons/Keyboard";

const radToDeg = (rad: number) => {
	return rad * (180 / Math.PI)
}

const degToRad = (deg: number) => {
	return deg * (Math.PI / 180)
}

export default function About(props: {class?: string}) {
	return (
		<div class={`pb-16 ${props.class}`}>
			<section class="container px-10">
				<h1 class="text-center text-2xl py-16">about</h1>
				<div class="grid grid-cols-2">
					<div class="h-20 border-r-white border-solid border-r-[1px] text-sm flex justify-center items-center">
						<p class="w-96">Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula sit porta primis penatibus risus sed, semper scelerisque odio. Mauris taciti primis torquent porttitor tincidunt a.</p>
					</div>
					<div class="relative">
						<Hobby svg={Translate} name="Languages" id={0} />
						<Hobby svg={Music} name="Music" id={1}/>
						<Hobby svg={CommandLine} name="Programming" id={2} />
						<Hobby svg={Keyboard} size="w-6" name="Keyboards" id={3} />
					</div>
				</div>
			</section>
		</div>
	);
}

interface Position {
	x: number,
	y: number,
}

const Hobby: Component<{svg: Component<ComponentProps<"svg">>, size?: string, name: string, id: number}> = (props) => {
	const { svg: Icon } = props;
	const [mousePos, setMousePos] = createSignal<Position>({x: 0, y: 0});
	const [pos, setPos] = createSignal<Position>({x: 0, y: 0});
	const [origin, setOrigin] = createSignal<Position>({x: 0, y: 0});
	const [hasOrigin, setHasOrigin] = createSignal(false);
	let containerRef: HTMLDivElement;

	const MAX_DISTANCE = 10;
	const RADIUS = 1.7;
	const HOBBIES_LENGTH = 4;

	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({x: e.x, y: e.y});
		}

		document.addEventListener("mousemove", handleMouseMove);
		onCleanup(() => document.removeEventListener("mousemove", handleMouseMove));
	});

	createEffect(() => {
		if (!containerRef) return;

		const rect = containerRef.getBoundingClientRect();
		const containerOffset = { x: rect.left - rect.width / 2, y: rect.top - rect.height / 2 };

		const deg = 360 / HOBBIES_LENGTH * props.id;
		let x = RADIUS * radToDeg(Math.cos(degToRad(deg)));
		let y = RADIUS * radToDeg(Math.sin(degToRad(deg)));

		if (!hasOrigin()) {
			setOrigin({x: x, y: y});
			console.log(`DIV-${props.id} x: ${origin().x} y: ${origin().y}`);
			setHasOrigin(true);
		}

		const localMousePos = {
			x: mousePos().x - containerOffset.x,
			y: mousePos().y - containerOffset.y,
		};

		const direction: Position = {x: origin().x - localMousePos.x, y: origin().y - localMousePos.y};
		const distance = Math.sqrt(direction.x ** 2 + direction.y ** 2);

		const limitedDistance = Math.min(distance, MAX_DISTANCE);

		const normalised: Position = {
			x: (direction.x / distance) * limitedDistance, 
			y: (direction.y / distance) * limitedDistance
		};

		x -= normalised.x;
		y -= normalised.y;

		setPos({x, y});
	});

	return (
		<div ref={(el) => (containerRef = el)} 
			class={`flex flex-col items-center gap-2 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
			style={`transform: translate(${pos().x}px, ${pos().y}px)`}>
			<div class="h-14 w-14 border-white border-2 border-solid rounded-full flex justify-center items-center">
				<Icon class={props.size} />
			</div>
			<p class="text-sm">{props.name}</p>
		</div>
	);
}














