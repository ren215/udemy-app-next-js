import { prisma } from '@/lib/prisma';

export const getContacts = async () => {
  return await prisma.contact.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: {
      createAd: 'desc',
    },
  });
};

export const getFistContact = async () => {
  return await prisma.contact.findFirst({
    select: {
      name: true,
      email: true,
    },
  });
};
