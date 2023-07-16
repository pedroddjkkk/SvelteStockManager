<script>
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';

	$: console.log($page);
</script>

{#if $page.data.session}
	<p>Logged in as {$page.data.session.user?.name}</p>

	<div class="flex mt-4">
		<button on:click={signOut} class="hover:text-indigo-400">Sign out</button>
	</div>
{:else}
	<p>Not logged in</p>
{/if}
