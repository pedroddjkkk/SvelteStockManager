import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationUpdateWithoutUserInputObjectSchema } from './MovimentationUpdateWithoutUserInput.schema';
import { MovimentationUncheckedUpdateWithoutUserInputObjectSchema } from './MovimentationUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUpdateWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => MovimentationUpdateWithoutUserInputObjectSchema),
			z.lazy(() => MovimentationUncheckedUpdateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const MovimentationUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
