import { Component, ComponentProps } from "solid-js";
import { Translate } from "../icons/Translate";
import Music from "../icons/Music";
import CommandLine from "../icons/CommandLine";
import Keyboard from "../icons/Keyboard";

export default function About() {
	return (
		<div class="pb-16">
			<section class="container px-10">
				<h1 class="text-center text-2xl py-16">about</h1>
				<div class="grid grid-cols-2">
					<div class="h-20 border-r-white border-solid border-r-[1px] text-sm flex justify-center items-center">
						<p class="w-96">Lorem ipsum odor amet, consectetuer adipiscing elit. Vehicula sit porta primis penatibus risus sed, semper scelerisque odio. Mauris taciti primis torquent porttitor tincidunt a.</p>
					</div>
					<div>
						<Hobby svg={Translate} name="Languages" />
						<Hobby svg={Music} name="Music" />
						<Hobby svg={CommandLine} name="Programming" />
						<Hobby svg={Keyboard} size="w-6" name="Keyboards" />
					</div>
				</div>
			</section>
		</div>
	);
}

const Hobby: Component<{svg: Component<ComponentProps<"svg">>, size?: string, name: string}> = (props) => {
	const { svg: Icon } = props;

	return (
		<div class="flex flex-col items-center gap-2 w-fit">
			<div class="h-14 w-14 border-white border-2 border-solid rounded-full flex justify-center items-center">
				<Icon class={props.size} />
			</div>
			<p class="text-sm">{props.name}</p>
		</div>
	);
}

