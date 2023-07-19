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
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	export let columns: GridColDef[];
	export let rows: any[];
	export let selectable: boolean = false;

	let checkboxes = rows.map((row) => {
		return { row, value: false };
	});;

	function onCheckboxSelect() {
		dispatch('select', checkboxes.filter((item) => item.value == true));
	}

	function onHeaderCheckboxClick() {
		checkboxes = checkboxes.map((item) => {
			return { ...item, value: checked };
		});
    dispatch('select', checkboxes.filter((item) => item.value == true));
	}

	let checked = false;
</script>

<Table>
	<TableHead>
		{#if selectable}
			<TableHeadCell class="!p-4">
				<Checkbox on:change={onHeaderCheckboxClick} bind:checked={checked}/>
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
						<Checkbox bind:checked={checkboxes[index].value} on:change={onCheckboxSelect}/>
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
