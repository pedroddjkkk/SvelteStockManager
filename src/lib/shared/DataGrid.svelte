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
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let columns: GridColDef[];
	export let rows: any[];
	export let selectable: boolean = false;

	let checked = false;
	let checkboxes = rows.map((row) => {
		return { row, checked: false };
	});

	function onHeaderCheckboxClick() {
		checkboxes = checkboxes.map((item) => {
			return { ...item, checked: checked };
		});
	}

	$: dispatch(
		'select',
		checkboxes.filter((item) => item.checked == true)
	);
</script>

<Table>
	<TableHead>
		{#if selectable}
			<TableHeadCell class="!p-4">
				<Checkbox on:change={onHeaderCheckboxClick} bind:checked />
			</TableHeadCell>
		{/if}
		{#each columns as column}
			<TableHeadCell>{column.headerName}</TableHeadCell>
		{/each}
	</TableHead>
	<TableBody>
		{#each rows as row, index}
			<TableBodyRow>
				{#if selectable}
					<TableBodyCell class="!p-4">
						<Checkbox bind:checked={checkboxes[index].checked} />
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
<slot name="footer" />
