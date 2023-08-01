import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MovimentationOrderByRelationAggregateInputObjectSchema } from './MovimentationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		name: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		password: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		Movimentation: z.lazy(() => MovimentationOrderByRelationAggregateInputObjectSchema).optional()
	})
	.strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
