<script lang="ts">
	import type { PageData } from './$types';
	import type { GridColDef } from '$lib/types';
	import type { Prisma } from '@prisma/client';

	import Paper from '$lib/shared/Paper.svelte';
	import DataGrid from '$lib/shared/DataGrid.svelte';
	import { ButtonGroup, Button } from 'flowbite-svelte';

	import GoTrashcan from 'svelte-icons/go/GoTrashcan.svelte';
	import GoPencil from 'svelte-icons/go/GoPencil.svelte';

	export let data: PageData;

	const columns: GridColDef[] = [
		{
			field: 'name',
			headerName: 'User Name'
		},
		{
			field: 'email',
			headerName: 'Email'
		},
		{
			field: 'role',
			headerName: 'Role',
			valueFormatter(value) {
				return value.toLocaleLowerCase();
			}
		},
		{
			field: 'createdAt',
			headerName: 'Created At',
			valueFormatter(value) {
				return new Date(value).toLocaleDateString();
			}
		}
	];

	let selectedRows: { row: Prisma.UserGetPayload<{}>; checked: boolean }[];

	function handleRemove() {
		const url = '/api/user/' + selectedRows.map((row) => row.row.id).join('/');
		fetch(url, { method: 'DELETE' });
	}
</script>

<div class="h-8" />
<Paper className="mx-auto border-none rounded-xl p-4 w-[90%]">
	<DataGrid
		{columns}
		rows={data.users}
		selectable
		on:select={(values) => (selectedRows = values.detail)}
	>
		<div slot="footer" class="w-full flex font-light justify-between items-center text-sm">
			{#if selectedRows && selectedRows.length > 0}
				<ButtonGroup>
					<Button on:click={handleRemove}
						><div class="w-6 h-6 mr-1"><GoTrashcan /></div>
						Remove</Button
					>
					{#if selectedRows.length == 1}
						<Button
							><div class="w-6 h-6 mr-1"><GoPencil /></div>
							Update</Button
						>
					{/if}
				</ButtonGroup>
			{:else}
				<div />
			{/if}
			<div>
				{#if selectedRows && selectedRows.length == 1}
					<p>{selectedRows.length} row selected</p>
				{:else if selectedRows && selectedRows.length > 1}
					<p>{selectedRows.length} rows selected</p>
				{:else}
					<div />
					<p>No rows selected</p>
				{/if}
			</div>
		</div>
	</DataGrid>
</Paper>
