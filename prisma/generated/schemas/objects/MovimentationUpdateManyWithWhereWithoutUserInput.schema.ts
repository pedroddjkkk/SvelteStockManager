import { z } from 'zod';
import { MovimentationScalarWhereInputObjectSchema } from './MovimentationScalarWhereInput.schema';
import { MovimentationUpdateManyMutationInputObjectSchema } from './MovimentationUpdateManyMutationInput.schema';
import { MovimentationUncheckedUpdateManyWithoutMovimentationInputObjectSchema } from './MovimentationUncheckedUpdateManyWithoutMovimentationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUpdateManyWithWhereWithoutUserInput> = z
	.object({
		where: z.lazy(() => MovimentationScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => MovimentationUpdateManyMutationInputObjectSchema),
			z.lazy(() => MovimentationUncheckedUpdateManyWithoutMovimentationInputObjectSchema)
		])
	})
	.strict();

export const MovimentationUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
