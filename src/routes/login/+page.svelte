<script lang="ts">
	import { Input, Heading, P, Button } from 'flowbite-svelte';
	import { signIn } from '@auth/sveltekit/client';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let error = false;

	async function onSubmit() {
		const login = await signIn('credentials', { email, password, redirect: false });

		if (login) {
			const body = await login.json();
			const url = new URL(body.url);
			const params = new URLSearchParams(url.search);

			const signError = params.get('error');

			if (signError) {
        error = true;
			} else {
				goto('/');
			}
		}
	}
</script>

<div class="h-screen w-screen flex justify-center items-center">
	<form
		action=""
		class="flex flex-col max-w-[400px] w-[90%] bg-white rounded-lg p-8 shadow-xl"
		on:submit|preventDefault={onSubmit}
	>
		<Heading tag="h2" class="mb-4 text-black font-normal">Welcome!</Heading>
		<P class="mb-8 text-black">Please login to continue.</P>
		<div class="mb-4">
			<Input
				type="text"
				name="email"
				id="email"
				placeholder="Email"
				size="lg"
				bind:value={email}
			/>
		</div>
		<div class="mb-6">
			<Input
				type="password"
				name="password"
				id="password"
				placeholder="Password"
				size="lg"
				bind:value={password}
			/>
		</div>
		<Button type="submit" size="md">Login</Button>
		{#if error}
			<div class="mt-2">
				<P class="text-red-500">Invalid email or password</P>
			</div>
		{/if}
		<div class="mb-6" />
		<P class="text-black mb-4"
			>Don't have an account? <a href="/register" class="text-blue-500">Register</a></P
		>
	</form>
</div>
