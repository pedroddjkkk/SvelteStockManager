import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { UserCreateNestedOneWithoutMovimentationInputObjectSchema } from './UserCreateNestedOneWithoutMovimentationInput.schema';
import { ProductCreateNestedOneWithoutMovimentationsInputObjectSchema } from './ProductCreateNestedOneWithoutMovimentationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateInput> = z
	.object({
		type: z.lazy(() => MovimentationTypeSchema),
		quantity: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		user: z.lazy(() => UserCreateNestedOneWithoutMovimentationInputObjectSchema).optional(),
		product: z.lazy(() => ProductCreateNestedOneWithoutMovimentationsInputObjectSchema).optional()
	})
	.strict();

export const MovimentationCreateInputObjectSchema = Schema;
