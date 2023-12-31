import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MovimentationListRelationFilterObjectSchema } from './MovimentationListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ProductWhereInputObjectSchema),
				z.lazy(() => ProductWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ProductWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ProductWhereInputObjectSchema),
				z.lazy(() => ProductWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
		stock: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		movimentations: z.lazy(() => MovimentationListRelationFilterObjectSchema).optional()
	})
	.strict();

export const ProductWhereInputObjectSchema = Schema;
