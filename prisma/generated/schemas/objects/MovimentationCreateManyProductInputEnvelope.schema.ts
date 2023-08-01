import { z } from 'zod';
import { MovimentationCreateManyProductInputObjectSchema } from './MovimentationCreateManyProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateManyProductInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => MovimentationCreateManyProductInputObjectSchema),
			z.lazy(() => MovimentationCreateManyProductInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const MovimentationCreateManyProductInputEnvelopeObjectSchema = Schema;
