<script lang="ts">
	import type { GridColDef } from '$lib/types';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	export let columns: GridColDef[];
	export let rows: any[];
</script>

<Table divClass="rounded-full">
	<TableHead>
		{#each columns as column}
			<TableHeadCell>{column.headerName}</TableHeadCell>
		{/each}
	</TableHead>
	<TableBody>
		{#each rows as row}
			{#each columns as column}
				{#if column.valueFormatter}
					<TableBodyCell>{column.valueFormatter(row[column.field])}</TableBodyCell>
				{:else}
					<TableBodyCell>{row[column.field]}</TableBodyCell>
				{/if}
			{/each}
		{:else}
			<TableBodyRow>
				<TableBodyCell colspan="4">No users found</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
