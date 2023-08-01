import { z } from 'zod';
import { MovimentationUpdateManyMutationInputObjectSchema } from './objects/MovimentationUpdateManyMutationInput.schema';
import { MovimentationWhereInputObjectSchema } from './objects/MovimentationWhereInput.schema';

export const MovimentationUpdateManySchema = z.object({
	data: MovimentationUpdateManyMutationInputObjectSchema,
	where: MovimentationWhereInputObjectSchema.optional()
});
