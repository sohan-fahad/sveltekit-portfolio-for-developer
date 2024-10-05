<script>
	import { navbarInfoes } from '$src/portfolio.config';
	import AsideNav from './AsideNav.svelte';
	import ModeToggleButton from './ModeToggleButton.svelte';

	let isAsideNav = false;

	const toggleAsideNav = () => {
		isAsideNav = !isAsideNav;
	};

	const scrollToElement = (id) => {
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<div class="navbar" data-aos="fade-down" data-aos-duration="500">
	<div class="wrapper container">
		<div class="three-line">
			<svg viewBox="0 0 24 24" on:click={toggleAsideNav}>
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="6" x2="20" y2="6" />
				<line x1="4" y1="18" x2="20" y2="18" />
			</svg>
		</div>
		<div class="logo">
			<img src={navbarInfoes.logoImg} alt="Logo" class="w-6 cursor-pointer" />
			<!-- <svg viewBox="0 0 1126 1035">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M920.162 1035C948.495 952.667 996.662 755.1 962.662 623.5C928.662 491.9 806.162 377.667 749.162 337V672.5H594.162V0H749.162V187C782.829 174.167 857.162 118.8 885.162 0H1048.16C1042.16 60.3333 1003.66 193.3 897.662 242.5L899.522 243.846C975.085 298.519 1061.57 361.097 1111.66 555.5C1162.16 751.5 1070.66 964 920.162 1035ZM4.1619 601.5C-27.0381 875.5 124.829 1003.67 204.662 1033.5C151.95 836.156 151.05 676.733 175.802 552.5H366.662V675H528.662V1.50006C344.662 -5.99995 43.1619 259 4.1619 601.5ZM366.662 445.5H206.007C249.827 328.459 316.424 256.321 366.662 225V445.5Z"
				/>
			</svg> -->
			<!-- <span> SOHAN </span> -->
		</div>
		<div class="nav-items-wrapper">
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
							<path
								d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z"
							/>
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
		<div>
			<ModeToggleButton />
		</div>

		<AsideNav {toggleAsideNav} {isAsideNav} />
	</div>
</div>

<style lang="postcss">
	.navbar {
		@apply py-2 lg:py-0 w-full fixed top-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-sm dark:shadow-slate-700  z-50;

		.wrapper {
			@apply flex items-center justify-between;

			.three-line {
				@apply lg:hidden;

				svg {
					@apply w-6 h-6 fill-none stroke-black dark:stroke-white;
				}
			}

			.logo {
				@apply flex items-center;

				svg {
					@apply w-6 fill-primary dark:fill-violet-500;
				}
			}

			.nav-items-wrapper {
				@apply hidden lg:block;

				ul {
					@apply flex  h-full;

					li {
						@apply flex justify-center items-center h-full;

						button {
							@apply py-3 px-3 flex gap-1 h-full items-center text-black dark:text-white hover:bg-primary transition-all text-sm hover:text-white;

							svg {
								@apply stroke-black fill-none dark:stroke-white h-5 w-5 transition-all;
							}

							&:hover {
								svg {
									@apply stroke-white;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
