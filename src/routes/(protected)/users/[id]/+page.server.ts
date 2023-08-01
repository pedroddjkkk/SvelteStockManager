import prisma from '$lib/prisma';
import type { PageServerLoad } from '../$types';

export const load = (async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id)
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      email: true,
      role: true
    }
  });

  return {
    user
  };
}) satisfies PageServerLoad;
