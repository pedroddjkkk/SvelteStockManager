import { z } from 'zod';
import { MovimentationWhereInputObjectSchema } from './objects/MovimentationWhereInput.schema';
import { MovimentationOrderByWithAggregationInputObjectSchema } from './objects/MovimentationOrderByWithAggregationInput.schema';
import { MovimentationScalarWhereWithAggregatesInputObjectSchema } from './objects/MovimentationScalarWhereWithAggregatesInput.schema';
import { MovimentationScalarFieldEnumSchema } from './enums/MovimentationScalarFieldEnum.schema';

export const MovimentationGroupBySchema = z.object({
	where: MovimentationWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			MovimentationOrderByWithAggregationInputObjectSchema,
			MovimentationOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: MovimentationScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(MovimentationScalarFieldEnumSchema)
});
