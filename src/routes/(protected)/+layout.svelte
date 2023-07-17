<script>
	import Sidebar from '$lib/admin/Sidebar.svelte';
	import { pages } from '$lib/constants';
</script>

<Sidebar {pages}>
	<slot />
</Sidebar>
