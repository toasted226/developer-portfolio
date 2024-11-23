import { Accessor, Component, ComponentProps, createEffect, createSignal, onCleanup, onMount } from "solid-js";
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

export default function About(props: { class?: string }) {
	let containerRef: HTMLDivElement;
	const [rect, setRect] = createSignal<DOMRect>();

	onMount(() => {
		if (!containerRef) return;
		setRect(containerRef.getBoundingClientRect());
	});

	return (
		<div class={`pb-52 ${props.class}`}>
			<section class="container px-10">
				<h1 class="text-center text-2xl py-16">about</h1>
				<div class="grid grid-cols-2">
					<div class="h-full border-r-white border-solid border-r-[1px] text-sm flex justify-center items-center">
						<p class="w-96">Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula sit porta primis penatibus risus sed, semper scelerisque odio. Mauris taciti primis torquent porttitor tincidunt a.</p>
					</div>
					<div class="relative" ref={(el) => (containerRef = el)}>
						<Hobby svg={Translate} name="Languages" id={0} rect={rect} />
						<Hobby svg={Music} name="Music" id={1} rect={rect} />
						<Hobby svg={CommandLine} name="Programming" id={2} rect={rect} />
						<Hobby svg={Keyboard} size="w-6" name="Keyboards" id={3} rect={rect} />
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

const Hobby: Component<{ svg: Component<ComponentProps<"svg">>, size?: string, name: string, id: number, rect: Accessor<DOMRect | undefined> }> = (props) => {
	const { svg: Icon } = props;
	const [mousePos, setMousePos] = createSignal<Position>({ x: 0, y: 0 });
	const [localMousePos, setLocalMousePos] = createSignal<Position>({ x: 0, y: 0 });
	const [pos, setPos] = createSignal<Position>({ x: 0, y: 0 });
	const [origin, setOrigin] = createSignal<Position>({ x: 0, y: 0 });
	const [hasOrigin, setHasOrigin] = createSignal(false);

	const MAX_DISTANCE = 10;
	const RADIUS = 1.7;
	const HOBBIES_LENGTH = 4;

	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({ x: e.x, y: e.y });
		}

		document.addEventListener("mousemove", handleMouseMove);
		onCleanup(() => document.removeEventListener("mousemove", handleMouseMove));
	});

	createEffect(() => {
		const rect = props.rect()!;
		const containerOffset = { x: rect.left - window.scrollX - rect.width / 2, y: rect.top - window.scrollY - rect.height / 2 };

		const deg = 360 / HOBBIES_LENGTH * props.id;
		let x = RADIUS * radToDeg(Math.cos(degToRad(deg)));
		let y = RADIUS * radToDeg(Math.sin(degToRad(deg)));

		if (!hasOrigin()) {
			setOrigin({ x: x + 14, y: y + 14 });
			setHasOrigin(true);
		}

		const localMousePos = {
			x: mousePos().x - containerOffset.x - rect.width,
			y: mousePos().y - containerOffset.y - 80,
		};
		setLocalMousePos(localMousePos);

		const direction: Position = { x: localMousePos.x - origin().x, y: localMousePos.y - origin().y };
		const distance = Math.sqrt(direction.x ** 2 + direction.y ** 2);

		const limitedDistance = Math.min(distance, MAX_DISTANCE);

		const normalised: Position = {
			x: (direction.x / distance) * limitedDistance,
			y: (direction.y / distance) * limitedDistance
		};

		x -= normalised.x;
		y -= normalised.y;

		setPos({ x, y });
	});

	return (
		<>
			<div class={`flex flex-col items-center gap-2 w-fit absolute top-1/2 left-1/2`}
				style={`transform: translate(${pos().x}px, ${pos().y}px);`}>
				<div class="h-14 w-14 border-white border-2 border-solid rounded-full flex justify-center items-center hover:scale-110 transition-all duration-150">
					<Icon class={props.size} />
				</div>
				<p class="text-sm">{props.name}</p>
			</div>
		</>
	);
}














