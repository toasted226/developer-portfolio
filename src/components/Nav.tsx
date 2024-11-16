import { createSignal } from "solid-js"
import { JSX } from "solid-js/h/jsx-runtime";

export default function Nav(props: {style?: JSX.CSSProperties}) {
	const [selected, setSelected] = createSignal({home: true, work: false, about: false});

	return (
		<nav class="absolute top-1/2 flex flex-col-reverse items-center justify-center gap-6 w-fit h-fit left-5" style={{...props.style, transform: `translateY(-50%) ${props.style?.transform}`}}>
			<a class={`cursor-pointer -rotate-90 h-fit w-fit hover:font-bold ${selected().home ? 'font-bold' : ''}`}>home</a>
			<div class={`h-[3px] w-[3px] bg-white rounded-full`}></div>
			<a class={`cursor-pointer -rotate-90 h-fit w-fit hover:font-bold ${selected().work ? 'font-bold' : ''}`}>work</a>
			<div class="h-[3px] w-[3px] bg-white rounded-full"></div>
			<a class={`cursor-pointer -rotate-90 h-fit w-fit hover:font-bold ${selected().about ? 'font-bold' : ''}`}>about</a>
		</nav>
	)
}

