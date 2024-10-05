<script>
	import { personalInformation, socialMediaInfoes } from '$src/portfolio.config';
	import { message } from '$src/presentation/common/notification';
	import { onMount } from 'svelte';

	let email = '';
	let subject = '';
	let messageBody = '';
	let isLoading = false;

	const sendMessage = async () => {
		try {
			isLoading = true;
			if (!email || !subject || !messageBody) {
				message.error({ title: 'Required all field' });
			} else {
				if (!validateEmail(email)) {
					message.error({ title: 'Enter a valid emaild' });
					return;
				}
				let data = await fetch('/api/email', {
					method: 'POST',
					body: JSON.stringify({ email, subject, message: messageBody }),
					headers: {
						'Content-Type': 'application/json'
					}
				});

				const response = await data.json();
				if (!response?.success) {
					message.error({ title: 'Unable to send message!' });
				} else {
					message.success({ title: 'Message successfully send!' });
					email = '';
					messageBody = '';
					subject = '';
				}
			}
		} catch (error) {
			console.log(error);
		} finally {
			isLoading = false;
		}
	};

	function validateEmail(email) {
		// Regular expression pattern for email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		return emailPattern.test(email);
	}
</script>

<section
	class="contact-section container mx-auto"
	id="contact"
	data-aos="fade-left"
	data-aos-duration="1000"
>
	<div class="info-wrapper">
		<div>
			<h2>Get in touch</h2>

			<p class="text-sm text-slate-300 mt-2 mb-5">
				If you'd like to know more about me, feel free to get in touch. I will be happy ot answer
				your questions.
			</p>
		</div>

		<div>
			<p class="contact-info">
				<svg viewBox="0 0 24 24" stroke-width="1.5">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
					/>
				</svg>
				<a href={`tel:${personalInformation.contactNumber}`}>
					<span>{personalInformation.contactNumber}</span>
				</a>
			</p>

			<p class="contact-info">
				<svg viewBox="0 0 24 24" stroke-width="1.5">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
					/>
					<path d="M3 7l9 6l9 -6" />
				</svg>
				<a href={`mailto:${personalInformation.email}`} target="_blank">
					<span>{personalInformation.email}</span>
				</a>
			</p>
			<p class="contact-info">
				<svg viewBox="0 0 24 24" stroke-width="1.5">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M5 12l-2 0l9 -9l9 9l-2 0" />
					<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
					<path d="M10 12h4v4h-4z" />
				</svg>

				<span
					>{personalInformation.address}, <br />{personalInformation.city}, {personalInformation.country}</span
				>
			</p>
		</div>

		<div class="socials-link-wrapper">
			{#each socialMediaInfoes as info}
				<a class="link" href={info.link} target="_blank" title={info.name}>
					<svg viewBox={info.viewBox} stroke-width="1.5">
						{#each info.svgCode as code}
							<path fill-rule="evenodd" d={code} />
						{/each}
					</svg>
				</a>
			{/each}
		</div>
	</div>
	<div class="form-wrapper">
		<form on:submit|preventDefault={sendMessage}>
			<h3>Enter Details</h3>

			<input type="text" placeholder="example@email.com" bind:value={email} />
			<input type="text" placeholder="subject" bind:value={subject} />

			<textarea placeholder="message" bind:value={messageBody} />
			{#if isLoading}
				<button type="submit" disabled>Sending...</button>
			{:else}
				<button type="submit">Send</button>
			{/if}
		</form>
	</div>
</section>

<style lang="postcss">
	.contact-section {
		@apply w-full block lg:grid grid-cols-2 mb-20;
		.info-wrapper {
			@apply p-5 lg:p-10 bg-primary rounded-t-lg lg:rounded-t-none lg:rounded-l-lg flex flex-col justify-between;

			h2 {
				@apply text-center lg:text-left text-xl lg:text-3xl font-semibold text-white;
			}

			.contact-info {
				@apply text-white flex gap-2 items-center mb-3;

				svg {
					@apply w-6 fill-none stroke-white;
				}

				span {
					@apply text-sm;
				}
			}

			.socials-link-wrapper {
				@apply w-full max-w-[250px] mx-auto lg:mx-0 mt-8 flex flex-wrap items-center justify-around;

				a {
					svg {
						@apply w-5 lg:w-6 h-5 lg:h-6 fill-white transition-all duration-300;
					}
					&:hover {
						svg {
							@apply scale-110;
						}
					}
				}
			}
		}

		.form-wrapper {
			@apply bg-slate-100 dark:bg-gray-800 lg:py-5 lg:pr-5 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg;

			form {
				@apply p-5 bg-white dark:bg-gray-900 h-full rounded-b-lg lg:rounded-b-none lg:rounded-r-lg;

				h3 {
					@apply text-xl lg:text-3xl font-bold text-black dark:text-white mb-5;
				}

				input {
					@apply p-2 rounded-md w-full mb-5 focus:outline-none border border-primary dark:border-none;
				}
				textarea {
					@apply w-full  rounded-md h-20 max-h-20 p-2 focus:outline-none border border-primary dark:border-none;
				}

				button {
					@apply py-2 lg:py-3 px-3 lg:px-5 text-white lg:text-primary rounded-md font-bold border-[3px] border-primary bg-no-repeat uppercase text-xs lg:text-sm mt-3;

					@apply bg-[linear-gradient(30deg,#662fe8_50%,transparent_50%)] bg-[0%] lg:bg-[100%] transition-[background] duration-300 ease-[ease-in-out] bg-[length:500px];

					&:hover {
						@apply text-white bg-[0%];
					}
				}
			}
		}
	}
</style>
