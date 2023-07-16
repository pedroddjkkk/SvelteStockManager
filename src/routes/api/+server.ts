import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';
import { SECRET_CREATE_TOKEN } from '$env/static/private';

export const POST = (async ({ request }) => {
	const body = await request.json();
  
	if (body.token == SECRET_CREATE_TOKEN) {
		const user = prisma.user.create({
			data: {
				email: body.email,
				name: body.name,
				password: body.password
			}
		});

		return json(user);
	}

	return json({ error: 'Invalid token' }, { status: 401 });
}) satisfies RequestHandler;
