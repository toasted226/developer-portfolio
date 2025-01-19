export type Skill = string;

export interface Project {
	name: string,
	desc: string,
	url: string,
	tags: Skill[],
}

export const projects: Project[] = [
	{
		name: "Colourful Assembly Language",
		desc: "Esoteric assembly-like language written as colours.",
		url: "https://github.com/toasted226/colourful-assembly-language",
		tags: ["C#"]
	},
	{
		name: "Conlang Dictionary",
		desc: "A Constructed Language Dictionary built for my friends.",
		url: "https://github.com/toasted226/conlang-dictionary",
		tags: ["TS", "JS", "Go", "Angular"]
	},
	{
		name: "One-Handed Keyboard",
		desc: "Small notepad allowing users to touch-type with one hand.",
		url: "https://github.com/toasted226/onehandkeyboard",
		tags: ["Rust", "TS", "JS", "React"]
	},
	{
		name: "Downloads Sorter",
		desc: "Tiny automation program to organise your downloads folder.",
		url: "https://github.com/toasted226/downloads-sorter",
		tags: ["Rust"]
	},
	{
		name: "Office Chaos",
		desc: "Game built in 7 days for Brackey's Game Jam 2021.",
		url: "https://github.com/toasted226/brackeys--gamejam-2021.2",
		tags: ["C#"]
	},
	{
		name: "Developer Portfolio",
		desc: "You're looking at it!",
		url: "https://github.com/toasted226/developer-portfolio",
		tags: ["TS", "JS", "Solid"]
	}
];

export const skills: Skill[] = ["Rust", "Go", "JS", "C#"];

