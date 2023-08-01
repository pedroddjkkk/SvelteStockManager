import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MovimentationOrderByRelationAggregateInputObjectSchema } from './MovimentationOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		price: z.lazy(() => SortOrderSchema).optional(),
		stock: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		movimentations: z.lazy(() => MovimentationOrderByRelationAggregateInputObjectSchema).optional()
	})
	.strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
