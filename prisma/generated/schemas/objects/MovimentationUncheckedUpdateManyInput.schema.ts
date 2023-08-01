import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MovimentationTypeSchema } from '../enums/MovimentationType.schema';
import { EnumMovimentationTypeFieldUpdateOperationsInputObjectSchema } from './EnumMovimentationTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUncheckedUpdateManyInput> = z
	.object({
		id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
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
		userId: z
			.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		productId: z
			.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable()
	})
	.strict();

export const MovimentationUncheckedUpdateManyInputObjectSchema = Schema;
