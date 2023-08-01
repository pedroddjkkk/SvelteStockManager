import { z } from 'zod';
import { UserCreateWithoutMovimentationInputObjectSchema } from './UserCreateWithoutMovimentationInput.schema';
import { UserUncheckedCreateWithoutMovimentationInputObjectSchema } from './UserUncheckedCreateWithoutMovimentationInput.schema';
import { UserCreateOrConnectWithoutMovimentationInputObjectSchema } from './UserCreateOrConnectWithoutMovimentationInput.schema';
import { UserUpsertWithoutMovimentationInputObjectSchema } from './UserUpsertWithoutMovimentationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMovimentationInputObjectSchema } from './UserUpdateWithoutMovimentationInput.schema';
import { UserUncheckedUpdateWithoutMovimentationInputObjectSchema } from './UserUncheckedUpdateWithoutMovimentationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutMovimentationNestedInput> = z
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
		upsert: z.lazy(() => UserUpsertWithoutMovimentationInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutMovimentationInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutMovimentationInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const UserUpdateOneWithoutMovimentationNestedInputObjectSchema = Schema;
