import { z } from 'zod';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { EnumMovimentationTypeFieldUpdateOperationsInputObjectSchema } from './EnumMovimentationTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutMovimentationNestedInputObjectSchema } from './UserUpdateOneWithoutMovimentationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUpdateWithoutProductInput> = z
	.object({
		type: z
			.union([
				z.lazy(() => MovimentationTypeSchema),
				z.lazy(() => EnumMovimentationTypeFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		quantity: z
			.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		user: z.lazy(() => UserUpdateOneWithoutMovimentationNestedInputObjectSchema).optional()
	})
	.strict();

export const MovimentationUpdateWithoutProductInputObjectSchema = Schema;
