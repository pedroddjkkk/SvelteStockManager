<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
</script>

<div class={cn(`shadow-xl border border-gray-200`, className)}>
	<slot />
</div>
