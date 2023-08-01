import { z } from 'zod';
import { MovimentationCreateManyUserInputObjectSchema } from './MovimentationCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateManyUserInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => MovimentationCreateManyUserInputObjectSchema),
			z.lazy(() => MovimentationCreateManyUserInputObjectSchema).array()
		]),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const MovimentationCreateManyUserInputEnvelopeObjectSchema = Schema;
