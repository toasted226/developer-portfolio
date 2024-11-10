export type Skill = string;

export interface Project {
	name: string,
	desc: string,
	tags: Skill[],
}

export const projects: Project[] = [
	{
		name: "Colourful Assembly Language",
		desc: "Esoteric assembly-like language written as colours.",
		tags: ["C#"]
	},
	{
		name: "Colourful Assembly Language",
		desc: "Yeet meet",
		tags: ["Rust", "JS"]
	},
	{
		name: "Colourful Assembly Language",
		desc: "Cheese feet",
		tags: ["Go", "JS"]
	},
	{
		name: "Colourful Assembly Language",
		desc: "I like cheesecake",
		tags: ["JS"]
	}
];

export const skills: Skill[] = ["Rust", "Go", "JS", "C#"];

