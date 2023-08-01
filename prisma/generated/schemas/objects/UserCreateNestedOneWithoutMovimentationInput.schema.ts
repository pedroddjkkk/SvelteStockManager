import { z } from 'zod';
import { UserCreateWithoutMovimentationInputObjectSchema } from './UserCreateWithoutMovimentationInput.schema';
import { UserUncheckedCreateWithoutMovimentationInputObjectSchema } from './UserUncheckedCreateWithoutMovimentationInput.schema';
import { UserCreateOrConnectWithoutMovimentationInputObjectSchema } from './UserCreateOrConnectWithoutMovimentationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMovimentationInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutMovimentationInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutMovimentationInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => UserCreateOrConnectWithoutMovimentationInputObjectSchema)
			.optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const UserCreateNestedOneWithoutMovimentationInputObjectSchema = Schema;
