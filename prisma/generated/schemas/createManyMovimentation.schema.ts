import { z } from 'zod';
import { MovimentationCreateManyInputObjectSchema } from './objects/MovimentationCreateManyInput.schema';

export const MovimentationCreateManySchema = z.object({
	data: z.union([
		MovimentationCreateManyInputObjectSchema,
		z.array(MovimentationCreateManyInputObjectSchema)
	]),
	skipDuplicates: z.boolean().optional()
});
