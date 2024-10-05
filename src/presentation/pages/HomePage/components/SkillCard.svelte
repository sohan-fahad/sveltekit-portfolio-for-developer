<script>
	export let skillInfo;
</script>

<div class="bg-white dark:bg-gray-900 rounded-lg opacity-90 shadow-xl text-center p-3 z-hover">
	<div class="flex flex-col gap-2">
		<div class="mx-auto mt-2.5">
			<img class="w-14" src={skillInfo?.img} alt="" />
		</div>
		<div class="sm:mt-2">
			<span class="text-xs sm:text-base text-black dark:text-white transition-all"
				>{skillInfo?.name}</span
			>
		</div>
	</div>
</div>
