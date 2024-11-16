import { Component, ComponentProps, createEffect, createSignal, onMount, splitProps } from "solid-js";
import { Translate } from "../icons/Translate";
import Music from "../icons/Music";
import CommandLine from "../icons/CommandLine";
import Keyboard from "../icons/Keyboard";

const RADIUS = 1.7;

const radToDeg = (rad: number) => {
	return rad * (180 / Math.PI)
}

const degToRad = (deg: number) => {
	return deg * (Math.PI / 180)
}

export default function About(props: {class?: string}) {
	const hobbyRefs: HTMLDivElement[] = [];

	onMount(() => {
		for (let i = 0; i < hobbyRefs.length; i++) {
			const deg = 360 / hobbyRefs.length * i;
			const x = RADIUS * radToDeg(Math.cos(degToRad(deg)));
			const y = RADIUS * radToDeg(Math.sin(degToRad(deg)));
			hobbyRefs[i].style.transform = `translate(${x}px, ${y}px)`;
		}
	});

	return (
		<div class={`pb-16 ${props.class}`}>
			<section class="container px-10">
				<h1 class="text-center text-2xl py-16">about</h1>
				<div class="grid grid-cols-2">
					<div class="h-20 border-r-white border-solid border-r-[1px] text-sm flex justify-center items-center">
						<p class="w-96">Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula sit porta primis penatibus risus sed, semper scelerisque odio. Mauris taciti primis torquent porttitor tincidunt a.</p>
					</div>
					<div class="relative">
						<Hobby ref={(el: HTMLDivElement) => el && hobbyRefs.push(el)} svg={Translate} name="Languages" />
						<Hobby ref={(el: HTMLDivElement) => el && hobbyRefs.push(el)} svg={Music} name="Music" />
						<Hobby ref={(el: HTMLDivElement) => el && hobbyRefs.push(el)} svg={CommandLine} name="Programming" />
						<Hobby ref={(el: HTMLDivElement) => el && hobbyRefs.push(el)} svg={Keyboard} size="w-6" name="Keyboards" />
					</div>
				</div>
			</section>
		</div>
	);
}

const Hobby: Component<{svg: Component<ComponentProps<"svg">>, size?: string, name: string, ref?: (el: HTMLDivElement) => void}> = (props) => {
	const { svg: Icon } = props;
	const [local] = splitProps(props, ["ref"]);

	return (
		<div ref={local.ref} class="flex flex-col items-center gap-2 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translaty-y-1/2">
			<div class="h-14 w-14 border-white border-2 border-solid rounded-full flex justify-center items-center">
				<Icon class={props.size} />
			</div>
			<p class="text-sm">{props.name}</p>
		</div>
	);
}

