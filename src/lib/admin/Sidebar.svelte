<script lang="ts">
	import type { Pages } from '$lib/types';
	import { page } from '$app/stores';

	export let pages: Pages;
</script>

<nav class="w-[270px] h-screen fixed from-sky-700 to-sky-800 bg-gradient-to-b">
	<section class="after:bg-gray-500 after:w-full after:h-px after:block mt-36" />

	<section>
		<ul class="flex justify-center items-center flex-col mt-4">
			{#each pages as pageItem}
				<a
					class={`flex items-center justify-start w-[80%] my-2 p-2 rounded-lg hover:bg-sky-600 hover:cursor-pointer transition-colors 
            ${$page.url.pathname === pageItem.path && 'bg-sky-600'}`}
					href={pageItem.path}
				>
					<div
						class={`w-6 h-6 mr-4 flex items-center ${
							$page.url.pathname === pageItem.path ? 'text-[#fc886a]' : 'text-gray-200'
						}`}
					>
						<svelte:component this={pageItem.icon} />
					</div>
					<div
						class={`text-gray-300 font-semibold ${
							$page.url.pathname === pageItem.path && 'text-white font-bold'
						}`}
					>
						{pageItem.name}
					</div>
				</a>
			{/each}
		</ul>
	</section>
</nav>

<div class="ml-[270px]">
	<slot />
</div>
