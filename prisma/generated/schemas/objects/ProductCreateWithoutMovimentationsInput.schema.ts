import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateWithoutMovimentationsInput> = z
	.object({
		name: z.string(),
		description: z.string(),
		price: z.number(),
		stock: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict();

export const ProductCreateWithoutMovimentationsInputObjectSchema = Schema;
