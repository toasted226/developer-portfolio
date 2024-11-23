import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import { Accessor, Component, ComponentProps, createEffect, createSignal, onCleanup, onMount } from "solid-js";

const radToDeg = (rad: number) => {
	return rad * (180 / Math.PI)
}

const degToRad = (deg: number) => {
	return deg * (Math.PI / 180)
}

interface Position {
	x: number,
	y: number,
}

const Hobby: Component<{ svg: Component<ComponentProps<"svg">>, size?: string, name: string, desc: string, id: number, rect: Accessor<DOMRect | undefined> }> = (props) => {
	const { svg: Icon } = props;
	const [mousePos, setMousePos] = createSignal<Position>({ x: 0, y: 0 });
	const [_, setLocalMousePos] = createSignal<Position>({ x: 0, y: 0 });
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

	let tooltipContentRef: HTMLDivElement;

	return (
		<>
			<Tooltip>
				<TooltipTrigger>
					<div class={`flex flex-col items-center gap-2 w-fit absolute top-1/2 left-1/2`}
						style={`transform: translate(${pos().x}px, ${pos().y}px);`}>
						<div class="h-14 w-14 border-white border-2 border-solid rounded-full flex justify-center items-center hover:scale-110 transition-all duration-150">
							<Icon class={props.size} />
						</div>
						<p class="text-sm">{props.name}</p>
					</div>
				</TooltipTrigger>
				<TooltipContent 
					class="bg-secondary-background text-white select-none"
					ref={(el) => tooltipContentRef = el} 
					style={`transform: translate(${pos().x + props.rect()!.width / 2.5}px, ${pos().y}px);`}>
					<p>{props.desc}</p>
				</TooltipContent>
			</Tooltip>
		</>
	);
}

export default Hobby;
