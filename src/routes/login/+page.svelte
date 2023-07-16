<script lang="ts">
	import { Label, Input, Heading, P, Button } from 'flowbite-svelte';
</script>

<div class="h-screen w-screen flex justify-center items-center">
	<form action="" class="flex flex-col max-w-[400px] w-[90%] bg-white rounded-lg p-8 shadow-xl">
		<Heading tag="h2" class="mb-4 text-black font-normal">Welcome!</Heading>
		<P class="mb-8 text-black">Please login to continue.</P>
		<div class="mb-4">
			<Input type="text" name="username" id="username" placeholder="Username" size="lg" />
		</div>
		<div class="mb-6">
			<Input type="password" name="password" id="password" placeholder="Password" size="lg" />
		</div>
		<Button type="submit" size="md">Login</Button>
    <div class="mb-6" />
    <P class="text-black mb-4">Don't have an account? <a href="/register" class="text-blue-500">Register</a></P>
	</form>
</div>
