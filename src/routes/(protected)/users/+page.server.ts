import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			name: true,
			createdAt: true,
			updatedAt: true,
			email: true,
			role: true
		}
	});

	return {
		users
	};
}) satisfies PageServerLoad;
