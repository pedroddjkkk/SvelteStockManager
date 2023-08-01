import { z } from 'zod';
import { MovimentationCreateWithoutProductInputObjectSchema } from './MovimentationCreateWithoutProductInput.schema';
import { MovimentationUncheckedCreateWithoutProductInputObjectSchema } from './MovimentationUncheckedCreateWithoutProductInput.schema';
import { MovimentationCreateOrConnectWithoutProductInputObjectSchema } from './MovimentationCreateOrConnectWithoutProductInput.schema';
import { MovimentationCreateManyProductInputEnvelopeObjectSchema } from './MovimentationCreateManyProductInputEnvelope.schema';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUncheckedCreateNestedManyWithoutProductInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => MovimentationCreateWithoutProductInputObjectSchema),
				z.lazy(() => MovimentationCreateWithoutProductInputObjectSchema).array(),
				z.lazy(() => MovimentationUncheckedCreateWithoutProductInputObjectSchema),
				z.lazy(() => MovimentationUncheckedCreateWithoutProductInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => MovimentationCreateOrConnectWithoutProductInputObjectSchema),
				z.lazy(() => MovimentationCreateOrConnectWithoutProductInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => MovimentationCreateManyProductInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const MovimentationUncheckedCreateNestedManyWithoutProductInputObjectSchema = Schema;
