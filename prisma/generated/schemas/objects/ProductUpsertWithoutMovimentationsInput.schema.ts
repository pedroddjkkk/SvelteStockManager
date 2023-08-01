import { z } from 'zod';
import { ProductUpdateWithoutMovimentationsInputObjectSchema } from './ProductUpdateWithoutMovimentationsInput.schema';
import { ProductUncheckedUpdateWithoutMovimentationsInputObjectSchema } from './ProductUncheckedUpdateWithoutMovimentationsInput.schema';
import { ProductCreateWithoutMovimentationsInputObjectSchema } from './ProductCreateWithoutMovimentationsInput.schema';
import { ProductUncheckedCreateWithoutMovimentationsInputObjectSchema } from './ProductUncheckedCreateWithoutMovimentationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutMovimentationsInput> = z
	.object({
		update: z.union([
			z.lazy(() => ProductUpdateWithoutMovimentationsInputObjectSchema),
			z.lazy(() => ProductUncheckedUpdateWithoutMovimentationsInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ProductCreateWithoutMovimentationsInputObjectSchema),
			z.lazy(() => ProductUncheckedCreateWithoutMovimentationsInputObjectSchema)
		])
	})
	.strict();

export const ProductUpsertWithoutMovimentationsInputObjectSchema = Schema;
