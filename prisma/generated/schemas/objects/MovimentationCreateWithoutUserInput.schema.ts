import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { ProductCreateNestedOneWithoutMovimentationsInputObjectSchema } from './ProductCreateNestedOneWithoutMovimentationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateWithoutUserInput> = z
	.object({
		type: z.lazy(() => MovimentationTypeSchema),
		quantity: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		product: z.lazy(() => ProductCreateNestedOneWithoutMovimentationsInputObjectSchema).optional()
	})
	.strict();

export const MovimentationCreateWithoutUserInputObjectSchema = Schema;
