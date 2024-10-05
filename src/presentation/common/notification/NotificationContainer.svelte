<script lang="ts">
	import { FlatToast, ToastContainer } from 'svelte-toasts';
</script>

<ToastContainer let:data placement="top-right">
	<FlatToast {data} />
</ToastContainer>

<style global lang="postcss">
	.st-toast-close-btn {
		display: none !important;
	}
	.st-toast.light.success {
		border-left: 3px solid var(--color-primary) !important;
		svg {
			fill: #ffff !important;
		}
	}
</style>
