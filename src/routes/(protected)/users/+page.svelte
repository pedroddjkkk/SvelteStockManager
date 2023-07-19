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

	export let data: PageData;
</script>

<Card size="lg">
	<Table>
		<TableHead>
			<TableHeadCell>User Name</TableHeadCell>
			<TableHeadCell>Email</TableHeadCell>
			<TableHeadCell>Role</TableHeadCell>
      <TableHeadCell>Created At</TableHeadCell>
		</TableHead>
		<TableBody class="divide-y">
			{#each data?.users as user}
				<TableBodyRow>
					<TableBodyCell>{user.name}</TableBodyCell>
					<TableBodyCell>{user.email}</TableBodyCell>
					<TableBodyCell>{user.role.toLocaleLowerCase()}</TableBodyCell>
					<TableBodyCell>{user.createdAt.toDateString()}</TableBodyCell>
				</TableBodyRow>
			{:else}
        <TableBodyRow>
          <TableBodyCell colspan="4">No users found</TableBodyCell>
        </TableBodyRow>
      {/each}
		</TableBody>
	</Table>
</Card>
