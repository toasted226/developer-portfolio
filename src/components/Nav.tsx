import { createSignal } from "solid-js"
import './Nav.css';

export default function Nav() {
	const [selected, _setSelected] = createSignal({ home: true, skills: false, about: false });

	return (
		<nav class="nav absolute flex flex-wrap justify-center gap-6 w-full h-fit py-10">
			<a class={`cursor-pointer inline-flex flex-col justify-between items-center h-fit w-fit hover:font-bold ${selected().home ? 'font-bold' : ''}`} data-text="home" href="">home</a>
			<a class={`cursor-pointer inline-flex flex-col justify-between items-center h-fit w-fit hover:font-bold ${selected().skills ? 'font-bold' : ''}`} data-text="skills" href="#skills">skills</a>
			<a class={`cursor-pointer inline-flex flex-col justify-between items-center h-fit w-fit hover:font-bold ${selected().about ? 'font-bold' : ''}`} data-text="about" href="#about">about</a>
		</nav>
	)
}

