import { z } from 'zod';
import { MovimentationUpdateInputObjectSchema } from './objects/MovimentationUpdateInput.schema';
import { MovimentationUncheckedUpdateInputObjectSchema } from './objects/MovimentationUncheckedUpdateInput.schema';
import { MovimentationWhereUniqueInputObjectSchema } from './objects/MovimentationWhereUniqueInput.schema';

export const MovimentationUpdateOneSchema = z.object({
	data: z.union([
		MovimentationUpdateInputObjectSchema,
		MovimentationUncheckedUpdateInputObjectSchema
	]),
	where: MovimentationWhereUniqueInputObjectSchema
});
