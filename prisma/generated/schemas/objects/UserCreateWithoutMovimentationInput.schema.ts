import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutMovimentationInput> = z
	.object({
		email: z.string(),
		name: z.string().optional().nullable(),
		password: z.string(),
		role: z.lazy(() => RoleSchema).optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional()
	})
	.strict();

export const UserCreateWithoutMovimentationInputObjectSchema = Schema;
