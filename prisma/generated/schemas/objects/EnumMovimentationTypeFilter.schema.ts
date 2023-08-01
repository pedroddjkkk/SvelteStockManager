import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { NestedEnumMovimentationTypeFilterObjectSchema } from './NestedEnumMovimentationTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumMovimentationTypeFilter> = z
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
				z.lazy(() => NestedEnumMovimentationTypeFilterObjectSchema)
			])
			.optional()
	})
	.strict();

export const EnumMovimentationTypeFilterObjectSchema = Schema;
