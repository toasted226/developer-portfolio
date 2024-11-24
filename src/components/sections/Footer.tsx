import Email from "../icons/Email";
import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"

export default function Footer() {
	return (
		<div class="w-full h-36 bg-secondary-background flex items-center justify-center">
			<div class="h-8 flex justify-center items-center gap-16">
				<a class="h-full" href="https://github.com/toasted226" target="_blank">
					<Github class="h-full hover:scale-110 transition-transform cursor-pointer" />
				</a>
				<a class="h-full" href="mailto:keaganncollins@gmail.com" target="_blank">
					<Email class="h-full hover:scale-110 transition-transform cursor-pointer" />
				</a>
			</div>
		</div>
	);
}

