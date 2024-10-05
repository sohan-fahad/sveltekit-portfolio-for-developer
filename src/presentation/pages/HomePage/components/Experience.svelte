<script>
	import { experienceInfoes } from '$src/portfolio.config';
</script>

<section
	class="experience-section container"
	id="experiece"
	data-aos="fade-right"
	data-aos-delay="500"
	data-aos-duration="500"
>
	<div class="row">
		<div class="title">
			<span class="tag">&lt;</span>
			<h2>Work <span class="text-primary dark:text-violet-500 font-bold">experience</span></h2>
			<span class="tag">/&gt;</span>
		</div>
		<div class="experience-timeline">
			<ol>
				{#each experienceInfoes as info}
					<li>
						<div class="list-icon" />
						<time class="time">{info.jobPeriod}</time>
						<h3 class="designation">{info.designation}</h3>
						<a href={info.href} target="_blank">
							<span class="company">{info.companyName}</span>
						</a>
						<p class="description">
							{info.designation}
						</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style lang="postcss">
	.experience-section {
		@apply my-10 mx-auto relative block;

		.row {
			@apply w-full lg:w-[980px] h-auto mx-auto;

			.title {
				@apply bg-center w-full flex items-center justify-center gap-2;

				h2 {
					@apply text-lg lg:text-2xl text-black dark:text-white text-center uppercase font-bold;
				}

				.tag {
					@apply text-black dark:text-white text-3xl;
				}
			}

			.experience-timeline {
				@apply w-full mt-10;

				ol {
					@apply relative border-l border-black dark:border-white;

					li {
						@apply mb-10 ml-4;

						.list-icon {
							@apply absolute w-3 h-3 mt-1.5 bg-primary rounded-full -left-1.5  border border-primary  dark:bg-primary;
						}

						.time {
							@apply mb-1 text-xs sm:text-sm font-normal leading-none text-gray-600 dark:text-slate-300;
						}

						.designation {
							@apply text-base sm:text-lg font-semibold text-primary dark:text-violet-500;
						}

						.company {
							@apply font-medium text-sm text-black dark:text-white;
						}

						.description {
							@apply text-sm mt-1 sm:mt-2 font-normal text-black dark:text-slate-300;
						}
					}
				}
			}
		}
	}
</style>
