import { z } from 'zod';
import { ProductCreateWithoutMovimentationsInputObjectSchema } from './ProductCreateWithoutMovimentationsInput.schema';
import { ProductUncheckedCreateWithoutMovimentationsInputObjectSchema } from './ProductUncheckedCreateWithoutMovimentationsInput.schema';
import { ProductCreateOrConnectWithoutMovimentationsInputObjectSchema } from './ProductCreateOrConnectWithoutMovimentationsInput.schema';
import { ProductUpsertWithoutMovimentationsInputObjectSchema } from './ProductUpsertWithoutMovimentationsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutMovimentationsInputObjectSchema } from './ProductUpdateWithoutMovimentationsInput.schema';
import { ProductUncheckedUpdateWithoutMovimentationsInputObjectSchema } from './ProductUncheckedUpdateWithoutMovimentationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutMovimentationsNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ProductCreateWithoutMovimentationsInputObjectSchema),
				z.lazy(() => ProductUncheckedCreateWithoutMovimentationsInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => ProductCreateOrConnectWithoutMovimentationsInputObjectSchema)
			.optional(),
		upsert: z.lazy(() => ProductUpsertWithoutMovimentationsInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => ProductUpdateWithoutMovimentationsInputObjectSchema),
				z.lazy(() => ProductUncheckedUpdateWithoutMovimentationsInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const ProductUpdateOneWithoutMovimentationsNestedInputObjectSchema = Schema;
