<script lang="ts">
	import type { Pages } from '$lib/types';

	export let pages: Pages;
</script>

<nav class="w-[270px] h-screen fixed from-sky-700 to-sky-800 bg-gradient-to-b">
	<section />

	<section>
		<ul>
			{#each pages as page}
				<li>{page.name}</li>
			{/each}
		</ul>
	</section>
</nav>

<div class="ml-[270px]">
	<slot />
</div>
