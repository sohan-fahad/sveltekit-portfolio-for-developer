<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	const scrollToTop = () => {
		if (browser) {
			window.scroll({
				top: 0,
				behavior: 'smooth'
			});
		}
	};
	let showScrollToTop = false;
	let listener: any;

	const handleScroll = () => {
		showScrollToTop = window.pageYOffset > 100;
	};

	onMount(() => {
		if (browser) listener = window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (browser) listener.removeEventListener('scroll', handleScroll);
	});
</script>

{#if showScrollToTop}
	<div class="scrollToTop">
		<button class="" on:click={scrollToTop}>
			<svg viewBox="0 0 18 22">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.69899 3.08174L7.76441 4.02584L7.75493 4.0258L1.3542 10.4265L0.0117182 9.08405L6.41245 2.68332L8.69707 0.398693L10.0396 1.74118L17.4565 9.15817L16.1159 10.4893L9.66059 4.0339L8.69899 3.08174ZM8.22508 5.69881L10.4911 7.2949L10.5527 21.8672L8.29342 21.8576L8.22508 5.69881Z"
				/>
			</svg>
		</button>
	</div>
{/if}

<style lang="postcss">
	.scrollToTop {
		@apply fixed  bottom-4 sm:bottom-5 right-3 sm:right-5 z-50;

		button {
			@apply rounded-full cursor-pointer w-8 h-8 sm:w-16 sm:h-16 bg-primary flex justify-center items-center shadow-md;

			svg {
				@apply fill-white w-4 sm:w-6;
			}
		}
	}
</style>
