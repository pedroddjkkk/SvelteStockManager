import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MovimentationUpdateManyWithoutProductNestedInputObjectSchema } from './MovimentationUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateInput> = z
	.object({
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		description: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		price: z
			.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		stock: z
			.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		createdAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		movimentations: z
			.lazy(() => MovimentationUpdateManyWithoutProductNestedInputObjectSchema)
			.optional()
	})
	.strict();

export const ProductUpdateInputObjectSchema = Schema;
