import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutMovimentationsInput> = z
	.object({
		id: z.number().optional(),
		name: z.string(),
		description: z.string(),
		price: z.number(),
		stock: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict();

export const ProductUncheckedCreateWithoutMovimentationsInputObjectSchema = Schema;
