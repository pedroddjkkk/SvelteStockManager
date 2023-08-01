import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationCreateWithoutUserInputObjectSchema } from './MovimentationCreateWithoutUserInput.schema';
import { MovimentationUncheckedCreateWithoutUserInputObjectSchema } from './MovimentationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => MovimentationCreateWithoutUserInputObjectSchema),
			z.lazy(() => MovimentationUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const MovimentationCreateOrConnectWithoutUserInputObjectSchema = Schema;
