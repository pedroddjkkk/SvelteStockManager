import { z } from 'zod';
import { MovimentationWhereUniqueInputObjectSchema } from './objects/MovimentationWhereUniqueInput.schema';

export const MovimentationFindUniqueSchema = z.object({
	where: MovimentationWhereUniqueInputObjectSchema
});
