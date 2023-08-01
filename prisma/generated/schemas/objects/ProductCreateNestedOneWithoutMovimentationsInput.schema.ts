import { z } from 'zod';
import { ProductCreateWithoutMovimentationsInputObjectSchema } from './ProductCreateWithoutMovimentationsInput.schema';
import { ProductUncheckedCreateWithoutMovimentationsInputObjectSchema } from './ProductUncheckedCreateWithoutMovimentationsInput.schema';
import { ProductCreateOrConnectWithoutMovimentationsInputObjectSchema } from './ProductCreateOrConnectWithoutMovimentationsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutMovimentationsInput> = z
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
		connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const ProductCreateNestedOneWithoutMovimentationsInputObjectSchema = Schema;
