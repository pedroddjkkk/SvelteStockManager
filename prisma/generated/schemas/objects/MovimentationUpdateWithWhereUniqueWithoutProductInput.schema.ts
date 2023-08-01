import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationUpdateWithoutProductInputObjectSchema } from './MovimentationUpdateWithoutProductInput.schema';
import { MovimentationUncheckedUpdateWithoutProductInputObjectSchema } from './MovimentationUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUpdateWithWhereUniqueWithoutProductInput> = z
	.object({
		where: z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => MovimentationUpdateWithoutProductInputObjectSchema),
			z.lazy(() => MovimentationUncheckedUpdateWithoutProductInputObjectSchema)
		])
	})
	.strict();

export const MovimentationUpdateWithWhereUniqueWithoutProductInputObjectSchema = Schema;
