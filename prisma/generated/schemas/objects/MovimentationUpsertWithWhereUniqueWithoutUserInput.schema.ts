import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationUpdateWithoutUserInputObjectSchema } from './MovimentationUpdateWithoutUserInput.schema';
import { MovimentationUncheckedUpdateWithoutUserInputObjectSchema } from './MovimentationUncheckedUpdateWithoutUserInput.schema';
import { MovimentationCreateWithoutUserInputObjectSchema } from './MovimentationCreateWithoutUserInput.schema';
import { MovimentationUncheckedCreateWithoutUserInputObjectSchema } from './MovimentationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUpsertWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => MovimentationUpdateWithoutUserInputObjectSchema),
			z.lazy(() => MovimentationUncheckedUpdateWithoutUserInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => MovimentationCreateWithoutUserInputObjectSchema),
			z.lazy(() => MovimentationUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const MovimentationUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
