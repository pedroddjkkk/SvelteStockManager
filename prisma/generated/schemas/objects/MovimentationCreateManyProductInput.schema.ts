import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateManyProductInput> = z
	.object({
		id: z.number().optional(),
		type: z.lazy(() => MovimentationTypeSchema),
		quantity: z.number(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		userId: z.number().optional().nullable()
	})
	.strict();

export const MovimentationCreateManyProductInputObjectSchema = Schema;
