import { z } from 'zod';

export const MovimentationScalarFieldEnumSchema = z.enum([
	'id',
	'type',
	'quantity',
	'createdAt',
	'updatedAt',
	'userId',
	'productId'
]);
