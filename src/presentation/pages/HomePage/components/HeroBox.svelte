<script lang="ts">
	import { heroBoxInfoes, socialMediaInfoes } from '$src/portfolio.config';
	import { onMount } from 'svelte';
	import Typewriter from 'typewriter-effect/dist/core';

	let Skill: HTMLParagraphElement;
	const skills = heroBoxInfoes.typewriterArr;

	onMount(() => {
		new Typewriter(Skill, {
			strings: skills,
			autoStart: true,
			loop: true,
			delay: 75
		});
	});
</script>

<div class="hero-box" id="hero" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
	<div class="details-wrapper">
		<div
			class="w-full hidden dark:block lg:block h-full absolute overflow-hidden left-0 top-0 rounded-xl -z-10"
		>
			<div
				class="absolute top-0 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter hidden dark:block dark:opacity-30 lg:top-44 right-0 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"
			/>

			<div
				class="absolute left-[28%] top-0 hidden dark:block rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"
			/>
			<div
				class="absolute bottom-44 -left-64 h-[150px] w-[500px] sm:w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-primary to-indigo-800 opacity-30 blur-3xl filter hidden dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"
			/>
		</div>
		<div class="user-info-wrapper">
			<div class="img-wrapper">
				<img src={heroBoxInfoes.image} alt="profile image" />
			</div>
			<h1>{heroBoxInfoes.name}</h1>
			<p class="text-white" bind:this={Skill} />
		</div>
		<div class="info mt-28 lg:mt-40">
			<svg viewBox="0 0 24 24" stroke-width="1.5">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
				<path d="M12 12l0 .01" />
				<path d="M3 13a20 20 0 0 0 18 0" />
			</svg>
			<p>
				{heroBoxInfoes.currentDesignation} at <b>{heroBoxInfoes.currentCompanyName}</b>
			</p>
		</div>

		<div class="info mt-5">
			<svg viewBox="0 0 24 24">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
				<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
				<path d="M10 12h4v4h-4z" />
			</svg>
			<p>{heroBoxInfoes.address}</p>
		</div>

		<p class="summary">
			{heroBoxInfoes.description}
		</p>

		<div class="buttuns-wrapper">
			<a href={heroBoxInfoes.resumeLink} target="_blank">Donwload Resume</a>
		</div>

		<div class="socials-link-wrapper">
			{#each socialMediaInfoes as info}
				<a class="link" href={info.link} target="_blank" title={info.name}>
					<svg viewBox={info.viewBox} stroke-width="1.5">
						{#each info.svgCode as code}
							<path fill-rule="evenodd" d={code} />
						{/each}
					</svg>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.hero-box {
		@apply w-full mt-0 mb-5 lg:my-10 container mx-auto relative overflow-hidden;

		.details-wrapper {
			@apply bg-white dark:bg-gray-900 dark:bg-opacity-40 p-5 lg:p-10 rounded-xl relative w-full mt-32;

			.user-info-wrapper {
				@apply flex flex-col justify-center items-center w-full  absolute -top-14 lg:-top-20 left-0;

				.img-wrapper {
					@apply w-28 h-28 lg:w-40 lg:h-40 rounded-full border-2 sm:border-4 border-primary flex justify-center items-center overflow-hidden;

					img {
						@apply w-full mt-8;
					}
				}

				h1 {
					@apply text-black dark:text-white font-bold text-xl sm:text-2xl mt-3 sm:mt-5;
				}

				p {
					@apply text-gray-700 dark:text-slate-100 text-sm sm:text-base;
				}
			}

			.info {
				@apply flex items-center gap-2;

				svg {
					@apply w-6 h-6 stroke-black dark:stroke-white fill-none;
				}

				p {
					@apply text-black dark:text-slate-300 text-sm sm:text-base;

					b {
						@apply dark:text-white;
					}
				}
			}

			.summary {
				@apply text-black dark:text-slate-200 mt-5 font-light text-justify text-sm leading-6;
			}

			.buttuns-wrapper {
				@apply mt-5 w-full flex lg:justify-start justify-center;

				a {
					@apply py-2 lg:py-3 px-3 lg:px-5 text-white lg:text-primary rounded-md font-bold border-[3px] border-primary bg-no-repeat uppercase text-xs lg:text-sm;

					@apply bg-[linear-gradient(30deg,#662fe8_50%,transparent_50%)] bg-[0%] lg:bg-[100%] transition-[background] duration-300 ease-[ease-in-out] bg-[length:500px];

					&:hover {
						@apply text-white bg-[0%];
					}
				}
			}

			.socials-link-wrapper {
				@apply mt-5 max-w-[250px] lg:w-1/5 mx-auto flex flex-wrap items-center justify-around;

				a {
					svg {
						@apply w-5 lg:w-6 h-5 lg:h-6 fill-black dark:fill-white transition-all duration-300;
					}
					&:hover {
						svg {
							@apply fill-primary;
						}
					}
				}
			}
		}
	}
</style>
