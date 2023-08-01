import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationAvgOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		quantity: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		productId: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const MovimentationAvgOrderByAggregateInputObjectSchema = Schema;
