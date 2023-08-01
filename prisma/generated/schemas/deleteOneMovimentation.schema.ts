import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './objects/MovimentationWhereUniqueInput.schema';

export const MovimentationDeleteOneSchema = z.object({
	where: MovimentationWhereUniqueInputObjectSchema
});
