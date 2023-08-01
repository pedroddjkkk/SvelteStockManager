import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationUpdateWithoutProductInputObjectSchema } from './MovimentationUpdateWithoutProductInput.schema';
import { MovimentationUncheckedUpdateWithoutProductInputObjectSchema } from './MovimentationUncheckedUpdateWithoutProductInput.schema';
import { MovimentationCreateWithoutProductInputObjectSchema } from './MovimentationCreateWithoutProductInput.schema';
import { MovimentationUncheckedCreateWithoutProductInputObjectSchema } from './MovimentationUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUpsertWithWhereUniqueWithoutProductInput> = z
	.object({
		where: z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => MovimentationUpdateWithoutProductInputObjectSchema),
			z.lazy(() => MovimentationUncheckedUpdateWithoutProductInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => MovimentationCreateWithoutProductInputObjectSchema),
			z.lazy(() => MovimentationUncheckedCreateWithoutProductInputObjectSchema)
		])
	})
	.strict();

export const MovimentationUpsertWithWhereUniqueWithoutProductInputObjectSchema = Schema;
