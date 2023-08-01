import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumMovimentationTypeFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => MovimentationTypeSchema).optional()
	})
	.strict();

export const EnumMovimentationTypeFieldUpdateOperationsInputObjectSchema = Schema;
