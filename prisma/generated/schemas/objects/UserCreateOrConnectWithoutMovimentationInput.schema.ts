import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutMovimentationInputObjectSchema } from './UserCreateWithoutMovimentationInput.schema';
import { UserUncheckedCreateWithoutMovimentationInputObjectSchema } from './UserUncheckedCreateWithoutMovimentationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMovimentationInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutMovimentationInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutMovimentationInputObjectSchema)
		])
	})
	.strict();

export const UserCreateOrConnectWithoutMovimentationInputObjectSchema = Schema;
