import { z } from 'zod';
import { MovimentationCreateWithoutProductInputObjectSchema } from './MovimentationCreateWithoutProductInput.schema';
import { MovimentationUncheckedCreateWithoutProductInputObjectSchema } from './MovimentationUncheckedCreateWithoutProductInput.schema';
import { MovimentationCreateOrConnectWithoutProductInputObjectSchema } from './MovimentationCreateOrConnectWithoutProductInput.schema';
import { MovimentationUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './MovimentationUpsertWithWhereUniqueWithoutProductInput.schema';
import { MovimentationCreateManyProductInputEnvelopeObjectSchema } from './MovimentationCreateManyProductInputEnvelope.schema';
import { MovimentationWhereUniqueInputObjectSchema } from './MovimentationWhereUniqueInput.schema';
import { MovimentationUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './MovimentationUpdateWithWhereUniqueWithoutProductInput.schema';
import { MovimentationUpdateManyWithWhereWithoutProductInputObjectSchema } from './MovimentationUpdateManyWithWhereWithoutProductInput.schema';
import { MovimentationScalarWhereInputObjectSchema } from './MovimentationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MovimentationUncheckedUpdateManyWithoutProductNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => MovimentationUpsertWithWhereUniqueWithoutProductInputObjectSchema),
				z.lazy(() => MovimentationUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => MovimentationCreateManyProductInputEnvelopeObjectSchema).optional(),
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
				z.lazy(() => MovimentationUpdateWithWhereUniqueWithoutProductInputObjectSchema),
				z.lazy(() => MovimentationUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => MovimentationUpdateManyWithWhereWithoutProductInputObjectSchema),
				z.lazy(() => MovimentationUpdateManyWithWhereWithoutProductInputObjectSchema).array()
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

export const MovimentationUncheckedUpdateManyWithoutProductNestedInputObjectSchema = Schema;
