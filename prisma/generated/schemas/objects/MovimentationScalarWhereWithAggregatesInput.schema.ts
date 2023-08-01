import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumMovimentationTypeWithAggregatesFilterObjectSchema } from './EnumMovimentationTypeWithAggregatesFilter.schema';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => MovimentationScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => MovimentationScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => MovimentationScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => MovimentationScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => MovimentationScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		type: z
			.union([
				z.lazy(() => EnumMovimentationTypeWithAggregatesFilterObjectSchema),
				z.lazy(() => MovimentationTypeSchema)
			])
			.optional(),
		quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
			.optional(),
		userId: z
			.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number()])
			.optional()
			.nullable(),
		productId: z
			.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number()])
			.optional()
			.nullable()
	})
	.strict();

export const MovimentationScalarWhereWithAggregatesInputObjectSchema = Schema;
