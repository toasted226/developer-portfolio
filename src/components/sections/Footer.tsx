import Email from "../icons/Email";
import Github from "../icons/Github"
import Linkedin from "../icons/Linkedin"

export default function Footer() {
	return (
		<div class="w-full h-36 bg-secondary-background flex items-center justify-center">
			<div class="h-8 flex justify-center items-center gap-16">
				<Github class="h-full hover:scale-110 transition-transform cursor-pointer" />
				<Linkedin class="h-full hover:scale-110 transition-transform cursor-pointer" />
				<Email class="h-full hover:scale-110 transition-transform cursor-pointer" />
			</div>
		</div>
	);
}

