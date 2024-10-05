<script lang="ts">
	import { copyrightInfo } from '$src/portfolio.config';
	import Achivement from './components/Achivement.svelte';
	import Contact from './components/Contact.svelte';
	import Education from './components/Education.svelte';
	import Experience from './components/Experience.svelte';
	import HeroBox from './components/HeroBox.svelte';
	import Navbar from './components/Navbar.svelte';
	import Project from './components/Project.svelte';
	import ScrollTop from './components/ScrollTop.svelte';
	import Skill from './components/Skill.svelte';
</script>

<header class="w-full overflow-hidden">
	<Navbar />
	<HeroBox />
</header>

<main class="overflow-hidden">
	<Experience />
	<Skill />
	<Education />
	<Project />
	<Achivement />
	<Contact />
</main>
<footer
	class="text-sm sm:text-base w-full flex flex-col justify-center gap-2 text-black dark:text-white items-center mb-4"
>
	<p class="flex justify-center gap-2 items-center">
		<span role="img" aria-label="copyright" class="anticon anticon-copyright"
			><svg
				viewBox="64 64 896 896"
				focusable="false"
				data-icon="copyright"
				width="1em"
				height="1em"
				fill="currentColor"
				aria-hidden="true"
				><path
					d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"
				/></svg
			>
		</span>
		{copyrightInfo}
	</p>
	<p class="text-xs">
		Made by
		<a
			class="text-primary underline"
			href="https://www.sohanfahad.dev"
			target="_blank"
			rel="noopener noreferrer">Sohan Fahad</a
		>
	</p>
</footer>

<ScrollTop />
