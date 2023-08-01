import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { NestedEnumMovimentationTypeWithAggregatesFilterObjectSchema } from './NestedEnumMovimentationTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMovimentationTypeFilterObjectSchema } from './NestedEnumMovimentationTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumMovimentationTypeWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => MovimentationTypeSchema).optional(),
		in: z
			.union([z.lazy(() => MovimentationTypeSchema).array(), z.lazy(() => MovimentationTypeSchema)])
			.optional(),
		notIn: z
			.union([z.lazy(() => MovimentationTypeSchema).array(), z.lazy(() => MovimentationTypeSchema)])
			.optional(),
		not: z
			.union([
				z.lazy(() => MovimentationTypeSchema),
				z.lazy(() => NestedEnumMovimentationTypeWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumMovimentationTypeFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumMovimentationTypeFilterObjectSchema).optional()
	})
	.strict();

export const EnumMovimentationTypeWithAggregatesFilterObjectSchema = Schema;
