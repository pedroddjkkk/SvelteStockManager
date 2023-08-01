import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationOrderByWithRelationInput> = z
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
		user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
		product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
	})
	.strict();

export const MovimentationOrderByWithRelationInputObjectSchema = Schema;
