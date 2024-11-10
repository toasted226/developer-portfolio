import Nav from "../Nav";

export default function Landing() {
	return (
		<section class="w-full h-screen relative">
			<Nav />
			<header class="w-full h-full flex flex-col justify-center">
				<div class="ml-[50vw] text-3xl">
					<h1 class="mb-4">I'm Keagan</h1>
					<h1 class="italic flex items-center">
						Less Talk, 
						<span class="text-primary underline mx-2">More Tech.</span>
						<div class="h-7 w-4 rounded-full border-primary border-2 ml-1 flex justify-center py-2">
							<div class="h-1 w-1 rounded-full bg-primary animate-bounce"></div>
						</div>
					</h1>
				</div>
			</header>
		</section>
	)
}

