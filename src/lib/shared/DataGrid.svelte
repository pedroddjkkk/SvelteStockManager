<script lang="ts">
	import type { GridColDef } from '$lib/types';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox
	} from 'flowbite-svelte';

	export let columns: GridColDef[];
	export let rows: any[];
	export let selectable: boolean = false;
</script>

<Table divClass="rounded-full">
	<TableHead>
		{#if selectable}
			<TableHeadCell class="!p-4">
				<Checkbox />
			</TableHeadCell>
		{/if}
		{#each columns as column}
			<TableHeadCell>{column.headerName}</TableHeadCell>
		{/each}
	</TableHead>
	<TableBody>
		{#each rows as row}
			<TableBodyRow>
				{#if selectable}
					<TableBodyCell class="!p-4">
						<Checkbox />
					</TableBodyCell>
				{/if}
				{#each columns as column}
					{#if column.valueFormatter}
						<TableBodyCell>{column.valueFormatter(row[column.field])}</TableBodyCell>
					{:else}
						<TableBodyCell>{row[column.field]}</TableBodyCell>
					{/if}
				{/each}
			</TableBodyRow>
		{:else}
			<TableBodyRow>
				<TableBodyCell colspan="4">No users found</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
