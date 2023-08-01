import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { EnumMovimentationTypeFilterObjectSchema } from './EnumMovimentationTypeFilter.schema';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => MovimentationScalarWhereInputObjectSchema),
				z.lazy(() => MovimentationScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => MovimentationScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => MovimentationScalarWhereInputObjectSchema),
				z.lazy(() => MovimentationScalarWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		type: z
			.union([
				z.lazy(() => EnumMovimentationTypeFilterObjectSchema),
				z.lazy(() => MovimentationTypeSchema)
			])
			.optional(),
		quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		userId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
			.optional()
			.nullable(),
		productId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
			.optional()
			.nullable()
	})
	.strict();

export const MovimentationScalarWhereInputObjectSchema = Schema;
