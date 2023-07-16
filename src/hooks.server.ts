import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/core/providers/credentials';
import prisma from '$lib/prisma';

export const handle = SvelteKitAuth({
	providers: [
		Credentials({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				if (credentials.email) {
					const user = await prisma.user.findFirst({
						where: {
							email: credentials.email
						}
					});

					if (user && user.password === credentials.password) {
						return {
							id: user.id.toString(),
							name: user.name as string
						};
					}
				}
				return null;
			}
		})
	]
});
