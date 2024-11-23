import Nav from "../Nav";

export default function Landing() {

	return (
		<div>
			<section class="w-full h-screen relative">
				<Nav />
				<header class="w-full h-full flex flex-col justify-center items-center">
					<div class="lg:text-5xl text-3xl w-fit flex flex-col items-center gap-3">
						<h1 class="mb-4">I'm Keagan</h1>
						<h1 class="italic flex items-center">
							Less Talk,
							<a href="#skills" class="text-primary mx-2 cursor-pointer underline hover:text-secondary transition-colors">More Tech!</a>
						</h1>
					</div>
					<div class="relative top-40 scale-125 h-7 w-4 rounded-full border-primary border-2 ml-1 flex justify-center py-2 cursor-pointer hover:scale-[140%] transition-transform">
						<div class="h-1 w-1 rounded-full bg-primary animate-bounce"></div>
					</div>
				</header>
			</section>
		</div>
	)
}
