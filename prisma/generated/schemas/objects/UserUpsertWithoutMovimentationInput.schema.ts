import { z } from 'zod';
import { UserUpdateWithoutMovimentationInputObjectSchema } from './UserUpdateWithoutMovimentationInput.schema';
import { UserUncheckedUpdateWithoutMovimentationInputObjectSchema } from './UserUncheckedUpdateWithoutMovimentationInput.schema';
import { UserCreateWithoutMovimentationInputObjectSchema } from './UserCreateWithoutMovimentationInput.schema';
import { UserUncheckedCreateWithoutMovimentationInputObjectSchema } from './UserUncheckedCreateWithoutMovimentationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutMovimentationInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutMovimentationInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutMovimentationInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutMovimentationInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutMovimentationInputObjectSchema)
		])
	})
	.strict();

export const UserUpsertWithoutMovimentationInputObjectSchema = Schema;
