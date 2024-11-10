import { Component } from "solid-js";

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
					</div>
				</div>
			</section>
		</div>
	);
}

const Hobby: Component<{svg: Component, name: string}> = (props) => {
	return (
		<div class="flex flex-col items-center gap-2 w-fit">
			<div>
			</div>
			<p>{props.name}</p>
		</div>
	);
}
