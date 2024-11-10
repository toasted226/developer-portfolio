import { createAsync, query } from "@solidjs/router";
import { Accessor, Component, createEffect, createSignal, For } from "solid-js";
import { client } from "~/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Project, Skill } from "~/cms/cms";
import ArrowTopRight from "../icons/ArrowTopRight";
import { updatePath } from "solid-js/store/types/store.js";

const getProjects = query(async () => {
	"use server";
	const response = await client.projects.query();
	return response
}, "projects");

const getSkills = query(async () => {
	"use server";
	const response = await client.skills.query();
	return response
}, "skills");

export const route = {
	preload: [() => getProjects(), () => getSkills()],
}

export default function Skills() {
	const projects = createAsync(() => getProjects());
	const skills = createAsync(() => getSkills());

	const [selectedSkill, setSelectedSkill] = createSignal<Skill>("Rust");

	return (
		<div class="bg-secondary-background pb-16">
			<section class="bg-secondary-background container px-10">
				<h1 class="text-center text-2xl py-16">skills</h1>
				<div class="flex h-[348px]">
					<div class="min-w-44 grow-0 text-lg flex flex-col gap-5 py-5 border-r-[1px] border-r-white h-full">
						<For each={skills()}>
							{(skill) => {
								return (
									<>
									<button 
										class={`text-left hover:text-secondary hover:font-semibold transition-all 
											${skill === selectedSkill() ? 'text-secondary font-semibold' : ''}`} 
										onClick={() => {
											setSelectedSkill(skill)
										}}>
										{skill}
									</button>
									<div class={`-mt-5 -ml-1 bg-secondary h-0.5 ${skill === selectedSkill() ? 'w-14' : 'w-0'} transition-all`}></div>
									</>
								)
							}}
						</For>
					</div>
					<Cards projects={projects} selectedSkill={selectedSkill} />
				</div>
			</section>
		</div>
	);
}

const Cards: Component<{ projects: Accessor<Project[] | undefined>, selectedSkill: Accessor<Skill> }> = (props) => {
	const [sorted, setSorted] = createSignal<Project[] | undefined>(props.projects());

	createEffect(() => {
		const curSorted = props.projects()?.filter((p) => p.tags.find((t) => t === props.selectedSkill()) !== undefined)
		setSorted(curSorted)
	});

	return (
		<div class={`flex flex-wrap grow gap-5 py-5 px-10 w-full`}>
			<For each={sorted()}>
				{(project) => {
					return (
						<Card class={`rounded-none bg-background text-white border-l-secondary border-l-4 border-solid border-y-0 border-r-0 w-120 h-36 flex flex-col justify-between p-6`}>
							<CardHeader class="flex-row justify-between items-baseline p-0">
								<CardTitle>{project.name}</CardTitle>
								<CardTags tags={project.tags} />
							</CardHeader>
							<CardContent class="text-sm flex justify-between items-center border-solid border-b-2 border-b-white px-0 py-2">
								<a class="w-96">{project.desc}</a>
								<ArrowTopRight class="h-5" />
							</CardContent>
						</Card>
					)
				}}
			</For>
		</div>
	);
}

const CardTags: Component<{ tags: Skill[] }> = (props) => {
	return (
		<span class="flex gap-2 text-sm text-secondary font-semibold">
			<For each={props.tags}>
				{(tag) => {
					return <span>{tag}</span>
				}}
			</For>
		</span>
	);
}













