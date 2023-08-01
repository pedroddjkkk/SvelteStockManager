import { z } from 'zod';
import { MovimentationOrderByWithRelationInputObjectSchema } from './objects/MovimentationOrderByWithRelationInput.schema';
import { MovimentationWhereInputObjectSchema } from './objects/MovimentationWhereInput.schema';
import { MovimentationWhereUniqueInputObjectSchema } from './objects/MovimentationWhereUniqueInput.schema';
import { MovimentationCountAggregateInputObjectSchema } from './objects/MovimentationCountAggregateInput.schema';
import { MovimentationMinAggregateInputObjectSchema } from './objects/MovimentationMinAggregateInput.schema';
import { MovimentationMaxAggregateInputObjectSchema } from './objects/MovimentationMaxAggregateInput.schema';
import { MovimentationAvgAggregateInputObjectSchema } from './objects/MovimentationAvgAggregateInput.schema';
import { MovimentationSumAggregateInputObjectSchema } from './objects/MovimentationSumAggregateInput.schema';

export const MovimentationAggregateSchema = z.object({
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
	_count: z.union([z.literal(true), MovimentationCountAggregateInputObjectSchema]).optional(),
	_min: MovimentationMinAggregateInputObjectSchema.optional(),
	_max: MovimentationMaxAggregateInputObjectSchema.optional(),
	_avg: MovimentationAvgAggregateInputObjectSchema.optional(),
	_sum: MovimentationSumAggregateInputObjectSchema.optional()
});
