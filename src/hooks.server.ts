import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/core/providers/credentials';

export const handle = SvelteKitAuth({
	providers: [
		Credentials({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				if (credentials.username === 'admin' && credentials.password === 'admin') {
					return {
						id: 'admin',
            name: 'admin',
            roles: ['admin']
					};
				}
				return null;
			}
		})
	],

});
