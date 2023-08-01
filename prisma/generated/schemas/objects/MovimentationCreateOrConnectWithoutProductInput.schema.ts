import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationCreateWithoutProductInputObjectSchema } from './MovimentationCreateWithoutProductInput.schema';
import { MovimentationUncheckedCreateWithoutProductInputObjectSchema } from './MovimentationUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateOrConnectWithoutProductInput> = z
	.object({
		where: z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => MovimentationCreateWithoutProductInputObjectSchema),
			z.lazy(() => MovimentationUncheckedCreateWithoutProductInputObjectSchema)
		])
	})
	.strict();

export const MovimentationCreateOrConnectWithoutProductInputObjectSchema = Schema;
