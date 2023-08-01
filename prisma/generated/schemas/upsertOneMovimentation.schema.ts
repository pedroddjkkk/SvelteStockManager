import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './objects/MovimentationWhereUniqueInput.schema';
import { MovimentationCreateInputObjectSchema } from './objects/MovimentationCreateInput.schema';
import { MovimentationUncheckedCreateInputObjectSchema } from './objects/MovimentationUncheckedCreateInput.schema';
import { MovimentationUpdateInputObjectSchema } from './objects/MovimentationUpdateInput.schema';
import { MovimentationUncheckedUpdateInputObjectSchema } from './objects/MovimentationUncheckedUpdateInput.schema';

export const MovimentationUpsertSchema = z.object({
	where: MovimentationWhereUniqueInputObjectSchema,
	create: z.union([
		MovimentationCreateInputObjectSchema,
		MovimentationUncheckedCreateInputObjectSchema
	]),
	update: z.union([
		MovimentationUpdateInputObjectSchema,
		MovimentationUncheckedUpdateInputObjectSchema
	])
});
