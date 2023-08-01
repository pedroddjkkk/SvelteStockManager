import { z } from 'zod';
import { MovimentationCreateWithoutUserInputObjectSchema } from './MovimentationCreateWithoutUserInput.schema';
import { MovimentationUncheckedCreateWithoutUserInputObjectSchema } from './MovimentationUncheckedCreateWithoutUserInput.schema';
import { MovimentationCreateOrConnectWithoutUserInputObjectSchema } from './MovimentationCreateOrConnectWithoutUserInput.schema';
import { MovimentationCreateManyUserInputEnvelopeObjectSchema } from './MovimentationCreateManyUserInputEnvelope.schema';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationCreateNestedManyWithoutUserInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => MovimentationCreateWithoutUserInputObjectSchema),
				z.lazy(() => MovimentationCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => MovimentationUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => MovimentationUncheckedCreateWithoutUserInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => MovimentationCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => MovimentationCreateOrConnectWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => MovimentationCreateManyUserInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const MovimentationCreateNestedManyWithoutUserInputObjectSchema = Schema;
