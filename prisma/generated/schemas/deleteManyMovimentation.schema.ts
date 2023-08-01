import { z } from 'zod';
import { MovimentationWhereInputObjectSchema } from './objects/MovimentationWhereInput.schema';

export const MovimentationDeleteManySchema = z.object({
	where: MovimentationWhereInputObjectSchema.optional()
});
