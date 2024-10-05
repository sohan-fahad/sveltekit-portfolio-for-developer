<script>
	import { educationInfoes } from '$src/portfolio.config';
</script>

<section
	class="education-section container"
	id="education"
	data-aos="fade-left"
	data-aos-duration="1000"
>
	<div class="row">
		<div class="title">
			<span class="tag">&lt;</span>
			<h2>
				<span class="text-primary dark:text-violet-500 font-bold">Educational</span> Qualification
			</h2>
			<span class="tag">/&gt;</span>
		</div>
		<div class="education-timeline">
			<ol>
				{#each educationInfoes as info}
					<li>
						<div class="list-icon" />
						<time class="time">{info.studyPeriod}</time>
						<h3 class="designation">{info.departmentName}</h3>
						<span class="company">{info.universityName}</span>
						<p class="description">CGPA: {info.cgpa}</p>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style lang="postcss">
	.education-section {
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

			.education-timeline {
				@apply w-full mt-10;

				ol {
					@apply relative border-r border-black dark:border-white;

					li {
						@apply mb-10 mr-4 text-right;

						.list-icon {
							@apply absolute mt-1.5 w-3 h-3 bg-primary rounded-full -right-1.5  border border-primary  dark:bg-primary;
						}

						.time {
							@apply mb-1 text-xs sm:text-sm font-normal leading-none text-gray-600 dark:text-slate-300;
						}

						.designation {
							@apply text-base sm:text-lg font-semibold text-primary dark:text-violet-500;
						}

						.company {
							@apply font-medium text-sm text-gray-600 dark:text-white;
						}

						.description {
							@apply text-sm mt-2 font-normal text-black dark:text-slate-200;
						}
					}
				}
			}
		}
	}
</style>
