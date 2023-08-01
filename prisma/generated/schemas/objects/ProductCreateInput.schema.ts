import { z } from 'zod';
import { MovimentationCreateNestedManyWithoutProductInputObjectSchema } from './MovimentationCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateInput> = z
	.object({
		name: z.string(),
		description: z.string(),
		price: z.number(),
		stock: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		movimentations: z
			.lazy(() => MovimentationCreateNestedManyWithoutProductInputObjectSchema)
			.optional()
	})
	.strict();

export const ProductCreateInputObjectSchema = Schema;
