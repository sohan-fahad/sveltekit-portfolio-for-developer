<div id="preloader">
	<!-- <svg viewBox="0 0 1126 1035" stroke-width="10">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M920.162 1035C948.495 952.667 996.662 755.1 962.662 623.5C928.662 491.9 806.162 377.667 749.162 337V672.5H594.162V0H749.162V187C782.829 174.167 857.162 118.8 885.162 0H1048.16C1042.16 60.3333 1003.66 193.3 897.662 242.5L899.522 243.846C975.085 298.519 1061.57 361.097 1111.66 555.5C1162.16 751.5 1070.66 964 920.162 1035ZM4.1619 601.5C-27.0381 875.5 124.829 1003.67 204.662 1033.5C151.95 836.156 151.05 676.733 175.802 552.5H366.662V675H528.662V1.50006C344.662 -5.99995 43.1619 259 4.1619 601.5ZM366.662 445.5H206.007C249.827 328.459 316.424 256.321 366.662 225V445.5Z"
		/>
	</svg> -->

	<svg viewBox="0 0 374 473" fill="none" stroke-width="5">
		<path
			d="M120.5 281.5C120.5 281.5 120.5 281.5 120.5 281.5ZM120.5 281.5C112.667 276.167 97.7 261 100.5 243C103.3 225 115.333 210.5 121 205.5L254 72.5L338 156.5C349 167 371 199 371 243C371 287 332 328.333 312.5 343.5L250 406L213 369L300.5 281.5C314 266.667 332 228 296 192C266.8 162.8 254.833 151.833 252.5 149.5L120.5 281.5Z"
			stroke-width="5"
		/>
		<path
			d="M188.5 4L226 41.5C186.5 81.3333 100.4 168.1 72 196.5C43.6 224.9 56.8333 259.333 67 273L124 330L255 199C259.5 202 274.5 220.5 276 236C277.2 248.4 270.167 258.167 266.5 261.5L160.5 367L225.5 432L188.5 469L38.5 319C26.6667 308.333 3 277.6 3 240C3 202.4 20.6667 173 29.5 163L188.5 4Z"
			stroke-width="5"
		/>
	</svg>
</div>

<style lang="postcss">
	#preloader {
		@apply h-screen w-full relative bg-gray-100 flex justify-center items-center;

		svg {
			@apply fill-none stroke-primary p-0 text-center m-auto absolute left-0 top-0 bottom-0 right-0 z-0 w-16 sm:w-20 lg:w-28;

			/* animation: pulse 1s infinite; */

			path {
				stroke-dasharray: 1000;
				stroke-dashoffset: 1000;
				animation: dash 5s linear alternate infinite;
			}
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(0.9);
		}

		70% {
			transform: scale(1);
		}

		100% {
			transform: scale(0.9);
		}
	}

	@keyframes dash {
		from {
			stroke-dashoffset: 10000;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
