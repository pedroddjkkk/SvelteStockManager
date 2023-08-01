import { z } from 'zod';
import { MovimentationCreateInputObjectSchema } from './objects/MovimentationCreateInput.schema';
import { MovimentationUncheckedCreateInputObjectSchema } from './objects/MovimentationUncheckedCreateInput.schema';

export const MovimentationCreateOneSchema = z.object({
	data: z.union([
		MovimentationCreateInputObjectSchema,
		MovimentationUncheckedCreateInputObjectSchema
	])
});
