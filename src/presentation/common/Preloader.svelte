<script>
	import { afterUpdate } from 'svelte';
	import Loader from './Loader.svelte';

	let showLoader = true;

	afterUpdate(() => {
		showLoader = false;
	});
</script>

{#if showLoader}
	<Loader />
{:else}
	<slot />
{/if}
