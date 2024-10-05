<script>
	import { projectFilteMenu, projectsData } from '$src/portfolio.config';

	let projectInfoes = projectsData;

	const filteredProject = (kayword) => {
		if (kayword == projectFilteMenu[0]) {
			projectInfoes = projectsData;
		} else {
			projectInfoes = projectsData.filter((item) => item.tech.includes(kayword));
		}
	};
</script>

<section class="project-section container mx-auto" id="project">
	<div class="title" data-aos="zoom-out-right" data-aos-delay="50" data-aos-duration="500">
		<span class="tag">&lt;</span>
		<h2>
			<span class="text-primary dark:text-violet-500 font-bold">Projects</span>
		</h2>
		<span class="tag">/&gt;</span>
	</div>
	<div class="filter-buttons" data-aos="zoom-out-left" data-aos-delay="150" data-aos-duration="500">
		{#each projectFilteMenu as item}
			<div class="button">
				<input
					type="radio"
					id={item}
					name="check-substitution-2"
					on:change={() => filteredProject(item)}
					checked={item == projectFilteMenu[0] ? true : false}
				/>
				<label for={item}>{item}</label>
			</div>
		{/each}
	</div>
	<div class="project-wrapper">
		{#each projectInfoes as project}
			<a
				href={project.url}
				target="_blank"
				data-aos="fade-up"
				data-aos-delay={`${50 * project.index}`}
				data-aos-duration="100"
			>
				<p class="name">
					<svg viewBox="0 0 24 24">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
						<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
						<path d="M12 9h8.4" />
						<path d="M14.598 13.5l-4.2 7.275" />
						<path d="M9.402 13.5l-4.2 -7.275" />
					</svg>
					<span>
						{project.name}
					</span>
				</p>

				<p class="description">{project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.tech as tech}
						<span class="p-1 px-2 text-white bg-slate-500 dark:bg-gray-600 rounded-full text-xs"
							>{tech}</span
						>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>

<style lang="postcss">
	.project-section {
		@apply my-12 lg:my-20;
		.title {
			@apply bg-center w-full flex items-center justify-center gap-2;

			h2 {
				@apply text-lg lg:text-2xl text-black dark:text-white text-center uppercase font-bold;
			}

			.tag {
				@apply text-black dark:text-white text-3xl;
			}
		}

		.filter-buttons {
			@apply w-full flex flex-wrap justify-center my-5;
			.button {
				input {
					@apply hidden;

					&:checked + label {
						@apply bg-primary border-primary text-white;
					}
				}

				label {
					@apply cursor-pointer border border-slate-500 p-1 px-4 block text-black dark:text-slate-300 text-sm;
				}
			}
		}

		.project-wrapper {
			@apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5;

			a {
				@apply bg-white dark:bg-gray-900 p-5 rounded-lg hover:scale-105 transition-all flex flex-col justify-between;

				.name {
					@apply text-black font-bold dark:text-white flex items-center gap-2 sm:text-lg text-base;

					svg {
						@apply w-6 stroke-black dark:stroke-white fill-none;
					}
				}

				.description {
					@apply my-2 text-black dark:text-slate-400 text-sm;
				}
			}
			/* @apply bg-white dark:bg-gray-900 dark:bg-opacity-40 p-5 lg:p-10 rounded-xl relative w-full; */
		}
	}
</style>
