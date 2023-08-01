import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutMovimentationsInputObjectSchema } from './ProductCreateWithoutMovimentationsInput.schema';
import { ProductUncheckedCreateWithoutMovimentationsInputObjectSchema } from './ProductUncheckedCreateWithoutMovimentationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutMovimentationsInput> = z
	.object({
		where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ProductCreateWithoutMovimentationsInputObjectSchema),
			z.lazy(() => ProductUncheckedCreateWithoutMovimentationsInputObjectSchema)
		])
	})
	.strict();

export const ProductCreateOrConnectWithoutMovimentationsInputObjectSchema = Schema;
