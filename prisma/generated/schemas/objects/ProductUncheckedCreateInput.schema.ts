import { z } from 'zod';
import { MovimentationUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './MovimentationUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z
	.object({
		id: z.number().optional(),
		name: z.string(),
		description: z.string(),
		price: z.number(),
		stock: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		movimentations: z
			.lazy(() => MovimentationUncheckedCreateNestedManyWithoutProductInputObjectSchema)
			.optional()
	})
	.strict();

export const ProductUncheckedCreateInputObjectSchema = Schema;
