import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';
import { getUserByCookie } from '$lib/jwt';

export const DELETE = (async ({ cookies, params }) => {
	const user = await getUserByCookie(cookies);

	if (!user) throw redirect(303, '/login');

	const ids = params.id.split('/').map((id) => parseInt(id));

	await prisma.user.deleteMany({
		where: {
			id: {
				in: ids
			}
		}
	});

	return json(await prisma.user.findMany());

}) satisfies RequestHandler;
