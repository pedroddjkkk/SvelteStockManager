import { z } from 'zod';

export const MovimentationTypeSchema = z.enum(['IN', 'OUT']);
