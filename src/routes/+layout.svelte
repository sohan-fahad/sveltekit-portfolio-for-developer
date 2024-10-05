<script>
	import { browser } from '$app/environment';
	import { openGraphInfoes } from '$src/portfolio.config';
	import Preloader from '$src/presentation/common/Preloader.svelte';
	import NotificationContainer from '$src/presentation/common/notification/NotificationContainer.svelte';
	import '../app.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css'; // You can also use <link> for styles
	import { onMount } from 'svelte';
	// ..
	onMount(() => {
		AOS.init({ once: true });
	});
</script>

<svelte:head>
	<!-- Open Graph meta for shareable content -->
	<meta property="og:title" content={openGraphInfoes.title} />
	<meta property="og:description" content={openGraphInfoes.description} />
	<meta property="og:image" content={openGraphInfoes.image} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:alt" content={openGraphInfoes.title} />

	<!-- Twitter Card meta (optional, but recommended) -->
	<meta name="twitter:title" content={openGraphInfoes.title} />
	<meta name="twitter:description" content={openGraphInfoes.description} />
	<meta name="twitter:image" content={openGraphInfoes.image} />
	<title>{openGraphInfoes.title}</title>
</svelte:head>

{#if browser}
	<NotificationContainer />
{/if}
<Preloader>
	<slot />
</Preloader>
