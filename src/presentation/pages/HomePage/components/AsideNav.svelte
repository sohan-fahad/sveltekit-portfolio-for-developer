<script>
	export let isAsideNav = false;
	export let toggleAsideNav;

	const scrollToElement = (id) => {
		toggleAsideNav();
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<div class="items-wrapper" class:left-0={isAsideNav} class:-left-[100%]={!isAsideNav}>
	<ul class="">
		<li>
			<button on:click={() => scrollToElement('hero')}>
				<svg viewBox="0 0 24 24" stroke-width="1.5">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
					<path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
					<path d="M20 21l2 -2l-2 -2" />
					<path d="M17 17l-2 2l2 2" />
				</svg>
				About
			</button>
		</li>
		<li>
			<button on:click={() => scrollToElement('experiece')}>
				<svg viewBox="0 0 24 24">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
					/>
					<path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
					<path d="M12 12l0 .01" />
					<path d="M3 13a20 20 0 0 0 18 0" />
				</svg>
				Experience
			</button>
		</li>
		<li>
			<button on:click={() => scrollToElement('skill')}>
				<svg viewBox="0 0 24 24">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
					<path d="M12 3v7" />
					<path d="M6 10h12" />
				</svg>
				Skill
			</button>
		</li>
		<li>
			<button on:click={() => scrollToElement('education')}>
				<svg viewBox="0 0 24 24">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z"
					/>
					<path d="M12 5v16" />
					<path d="M7 7h1" />
					<path d="M7 11h1" />
					<path d="M16 7h1" />
					<path d="M16 11h1" />
					<path d="M16 15h1" />
				</svg>
				Education
			</button>
		</li>

		<li>
			<button on:click={() => scrollToElement('project')}>
				<svg viewBox="0 0 24 24">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
					/>
				</svg>
				Project
			</button>
		</li>

		<li>
			<button on:click={() => scrollToElement('contact')}>
				<svg viewBox="0 0 24 24">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
					<path d="M3 6l9 6l9 -6" />
					<path d="M15 18h6" />
					<path d="M18 15l3 3l-3 3" />
				</svg>
				Contact
			</button>
		</li>
	</ul>
</div>
<div
	class="aside-nav-bg"
	on:click={toggleAsideNav}
	class:opacity-100={isAsideNav}
	class:opacity-0={!isAsideNav}
	class:left-0={isAsideNav}
	class:-left-[100%]={!isAsideNav}
/>

<style lang="postcss">
	.items-wrapper {
		@apply fixed  top-0 h-screen w-1/2 sm:w-1/3 flex justify-center pt-16 bg-slate-200 dark:bg-gray-800 z-20 transition-all;
		ul {
			@apply flex flex-col justify-start w-full;

			li {
				@apply flex items-center gap-2 w-full;

				svg {
					@apply stroke-black fill-none dark:stroke-white h-5 w-5;
				}
				button {
					@apply w-full py-2 px-3 flex gap-2 h-full items-center text-black dark:text-white hover:bg-primary transition-all text-sm;

					svg {
						@apply stroke-black fill-none dark:stroke-white h-5 w-5;
					}
				}
			}
		}
	}
	.aside-nav-bg {
		@apply w-full bg-black bg-opacity-50 h-screen fixed top-0 z-10 transition-opacity;
	}
</style>
