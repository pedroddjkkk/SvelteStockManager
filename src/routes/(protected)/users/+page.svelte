<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { PageData } from './$types';
	import Paper from '$lib/shared/Paper.svelte';
	import type { GridColDef } from '$lib/types';
	import DataGrid from '$lib/shared/DataGrid.svelte';

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
			valueFormatter(value: string){
				return new Date(value).toLocaleDateString();
			}
		}
	];
</script>

<div class="h-8" />
<Paper className="mx-auto border-none rounded-xl p-4 w-[90%]">
	<DataGrid {columns} rows={data.users} selectable/>
</Paper>
