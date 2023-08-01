import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductWhereUniqueInput> = z
	.object({
		id: z.number().optional()
	})
	.strict();

export const ProductWhereUniqueInputObjectSchema = Schema;
