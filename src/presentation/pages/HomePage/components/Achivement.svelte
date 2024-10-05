<script>
	import { achivementData } from '$src/portfolio.config';
</script>

<section
	class="achivement-section container"
	id="achivement"
	data-aos="zoom-in-up"
	data-aos-duration="1000"
>
	<div class="title">
		<span class="tag">&lt;</span>
		<h2><span class="text-primary dark:text-violet-500 font-bold">Achivement</span></h2>
		<span class="tag">/&gt;</span>
	</div>

	<div class="achivement-wrapper">
		{#each achivementData as achivement}
			<div class="achivement-card">
				<div class="info">
					<h5>{achivement.name}</h5>
					<p>
						{achivement.description}
					</p>
				</div>
				<img class="" src="/images/munna.jpeg" alt="" />
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	.achivement-section {
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

		.achivement-wrapper {
			@apply rounded-xl relative w-full my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3;

			.achivement-card {
				@apply bg-white dark:bg-gray-900 flex justify-between items-center rounded-lg;

				img {
					@apply w-24 rounded-r-lg;
				}

				.info {
					@apply p-5;

					h5 {
						@apply sm:text-lg text-base text-black font-bold dark:text-white;
					}

					p {
						@apply text-black dark:text-slate-400 text-sm;
					}
				}
			}
		}
	}
</style>
