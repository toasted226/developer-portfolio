import { createAsync, query } from "@solidjs/router";
import { Accessor, Component, createEffect, createSignal, For } from "solid-js";
import { client } from "~/lib/trpc";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Project, Skill } from "~/cms/cms";
import ArrowTopRight from "../icons/ArrowTopRight";
import Github from "../icons/Github";

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

export default function Skills(props: {class?: string}) {
	const projects = createAsync(() => getProjects());
	const skills = createAsync(() => getSkills());

	const [selectedSkill, setSelectedSkill] = createSignal<Skill>("Rust");

	return (
		<div class={`bg-secondary-background pb-16 ${props.class}`} id="skills">
			<section class="bg-secondary-background container px-10">
				<h1 class="text-center text-2xl lg:py-16 max-lg:pt-16 max-lg:pb-7">skills</h1>
				<div class="flex max-lg:flex-col lg:min-h-[348px] h-fit">
					<div class="min-w-44 grow-0 text-lg max-lg:h-fit flex lg:flex-col gap-5 py-5 lg:border-r-[1px] lg:border-r-white h-full max-lg:justify-center">
						<For each={skills()}>
							{(skill) => {
								return (
									<div class="flex flex-col gap-1">
										<button 
											class={`text-left hover:text-secondary hover:font-semibold transition-all 
												${skill === selectedSkill() ? 'text-secondary font-semibold' : ''}`} 
											onClick={() => {
												setSelectedSkill(skill)
											}}>
											{skill}
										</button>
										<div class={`max-lg:hidden -ml-1 bg-secondary h-0.5 ${skill === selectedSkill() ? 'w-14' : 'w-0'} transition-all`}></div>
									</div>
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
		<div class={`flex flex-wrap max-lg:justify-center lg:grow gap-5 py-5 px-10 w-full`}>
			<For each={sorted()}>
				{(project) => {
					return (
						<Card class={`rounded-none bg-background text-white border-l-secondary border-l-4 border-solid border-y-0 border-r-0 w-120 md:h-36 h-fit flex flex-col justify-between p-6`}>
							<CardHeader class="md:flex-row max-md:flex-col justify-between items-baseline p-0">
								<CardTitle>{project.name}</CardTitle>
								<CardTags tags={project.tags} />
							</CardHeader>
							<a href={project.url} target="_blank">
								<CardContent class="max-md:hidden text-sm flex justify-between items-center border-solid border-b-2 border-b-white px-0 py-2">
									<a class="w-96">{project.desc}</a>
									<ArrowTopRight class="h-5" />
								</CardContent>
							</a>
							<CardContent class="md:hidden text-sm flex flex-col px-0 py-2 gap-2">
								<a class="">{project.desc}</a>
								<Github class="h-5 w-fit" />
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













