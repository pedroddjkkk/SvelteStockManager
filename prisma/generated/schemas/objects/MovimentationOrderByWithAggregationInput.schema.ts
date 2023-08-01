import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MovimentationCountOrderByAggregateInputObjectSchema } from './MovimentationCountOrderByAggregateInput.schema';
import { MovimentationAvgOrderByAggregateInputObjectSchema } from './MovimentationAvgOrderByAggregateInput.schema';
import { MovimentationMaxOrderByAggregateInputObjectSchema } from './MovimentationMaxOrderByAggregateInput.schema';
import { MovimentationMinOrderByAggregateInputObjectSchema } from './MovimentationMinOrderByAggregateInput.schema';
import { MovimentationSumOrderByAggregateInputObjectSchema } from './MovimentationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		quantity: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		userId: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		productId: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
			.optional(),
		_count: z.lazy(() => MovimentationCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => MovimentationAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => MovimentationMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => MovimentationMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => MovimentationSumOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const MovimentationOrderByWithAggregationInputObjectSchema = Schema;
