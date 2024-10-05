<script>
	import { skillInfoes } from '$src/portfolio.config';
	import SkillCard from './SkillCard.svelte';
</script>

<section class="skill-section container" id="skill" data-aos="zoom-in-up" data-aos-duration="1000">
	<div class="title">
		<span class="tag">&lt;</span>
		<h2><span class="text-primary dark:text-violet-500 font-bold">Skill</span></h2>
		<span class="tag">/&gt;</span>
	</div>

	<div class="skill-wrapper">
		{#each skillInfoes as info}
			<SkillCard skillInfo={info} />
		{/each}
	</div>
</section>

<style lang="postcss">
	.skill-section {
		@apply mx-auto mt-12 lg:mt-20;

		.title {
			@apply bg-center w-full flex items-center justify-center gap-2;

			h2 {
				@apply text-lg lg:text-2xl text-black dark:text-white text-center uppercase font-bold;
			}

			.tag {
				@apply text-black dark:text-white text-3xl;
			}
		}

		.skill-wrapper {
			@apply rounded-xl relative w-full my-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3;

			.skill-item {
				@apply p-5 flex flex-col gap-2 justify-center items-center border-slate-400 cursor-pointer;

				svg {
					@apply w-8 sm:w-16 transition-all;
				}

				span {
					@apply text-xs sm:text-base text-black dark:text-white transition-all;
				}

				&:hover {
					svg {
						@apply scale-110;
					}
				}
			}
		}
	}
</style>
