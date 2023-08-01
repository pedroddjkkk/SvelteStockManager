import { z } from 'zod';
import { MovimentationScalarWhereInputObjectSchema } from './MovimentationScalarWhereInput.schema';
import { MovimentationUpdateManyMutationInputObjectSchema } from './MovimentationUpdateManyMutationInput.schema';
import { MovimentationUncheckedUpdateManyWithoutMovimentationsInputObjectSchema } from './MovimentationUncheckedUpdateManyWithoutMovimentationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUpdateManyWithWhereWithoutProductInput> = z
	.object({
		where: z.lazy(() => MovimentationScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => MovimentationUpdateManyMutationInputObjectSchema),
			z.lazy(() => MovimentationUncheckedUpdateManyWithoutMovimentationsInputObjectSchema)
		])
	})
	.strict();

export const MovimentationUpdateManyWithWhereWithoutProductInputObjectSchema = Schema;
