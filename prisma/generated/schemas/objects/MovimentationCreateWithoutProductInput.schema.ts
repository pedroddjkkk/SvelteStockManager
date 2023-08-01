import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { UserCreateNestedOneWithoutMovimentationInputObjectSchema } from './UserCreateNestedOneWithoutMovimentationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateWithoutProductInput> = z
	.object({
		type: z.lazy(() => MovimentationTypeSchema),
		quantity: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		user: z.lazy(() => UserCreateNestedOneWithoutMovimentationInputObjectSchema).optional()
	})
	.strict();

export const MovimentationCreateWithoutProductInputObjectSchema = Schema;
