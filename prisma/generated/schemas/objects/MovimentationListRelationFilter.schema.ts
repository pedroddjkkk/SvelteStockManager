import { z } from 'zod';
import { MovimentationWhereInputObjectSchema } from './MovimentationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationListRelationFilter> = z
	.object({
		every: z.lazy(() => MovimentationWhereInputObjectSchema).optional(),
		some: z.lazy(() => MovimentationWhereInputObjectSchema).optional(),
		none: z.lazy(() => MovimentationWhereInputObjectSchema).optional()
	})
	.strict();

export const MovimentationListRelationFilterObjectSchema = Schema;
