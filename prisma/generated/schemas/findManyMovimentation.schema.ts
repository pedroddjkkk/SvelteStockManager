import { z } from 'zod';
import { MovimentationOrderByWithRelationInputObjectSchema } from './objects/MovimentationOrderByWithRelationInput.schema';
import { MovimentationWhereInputObjectSchema } from './objects/MovimentationWhereInput.schema';
import { MovimentationWhereUniqueInputObjectSchema } from './objects/MovimentationWhereUniqueInput.schema';
import { MovimentationScalarFieldEnumSchema } from './enums/MovimentationScalarFieldEnum.schema';

export const MovimentationFindManySchema = z.object({
	orderBy: z
		.union([
			MovimentationOrderByWithRelationInputObjectSchema,
			MovimentationOrderByWithRelationInputObjectSchema.array()
		])
		.optional(),
	where: MovimentationWhereInputObjectSchema.optional(),
	cursor: MovimentationWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(MovimentationScalarFieldEnumSchema).optional()
});
