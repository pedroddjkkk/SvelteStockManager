import { z } from 'zod';
import { MovimentationCreateWithoutUserInputObjectSchema } from './MovimentationCreateWithoutUserInput.schema';
import { MovimentationUncheckedCreateWithoutUserInputObjectSchema } from './MovimentationUncheckedCreateWithoutUserInput.schema';
import { MovimentationCreateOrConnectWithoutUserInputObjectSchema } from './MovimentationCreateOrConnectWithoutUserInput.schema';
import { MovimentationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './MovimentationUpsertWithWhereUniqueWithoutUserInput.schema';
import { MovimentationCreateManyUserInputEnvelopeObjectSchema } from './MovimentationCreateManyUserInputEnvelope.schema';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './MovimentationUpdateWithWhereUniqueWithoutUserInput.schema';
import { MovimentationUpdateManyWithWhereWithoutUserInputObjectSchema } from './MovimentationUpdateManyWithWhereWithoutUserInput.schema';
import { MovimentationScalarWhereInputObjectSchema } from './MovimentationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUncheckedUpdateManyWithoutUserNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => MovimentationUpsertWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => MovimentationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => MovimentationCreateManyUserInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema),
				z.lazy(() => MovimentationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => MovimentationUpdateWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => MovimentationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => MovimentationUpdateManyWithWhereWithoutUserInputObjectSchema),
				z.lazy(() => MovimentationUpdateManyWithWhereWithoutUserInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => MovimentationScalarWhereInputObjectSchema),
				z.lazy(() => MovimentationScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const MovimentationUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
