import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { MovimentationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './MovimentationUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
	.object({
		id: z.number().optional(),
		email: z.string(),
		name: z.string().optional().nullable(),
		password: z.string(),
		role: z.lazy(() => RoleSchema).optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		Movimentation: z
			.lazy(() => MovimentationUncheckedCreateNestedManyWithoutUserInputObjectSchema)
			.optional()
	})
	.strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
