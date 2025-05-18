import { prisma } from '@/lib/prisma';

export const getContacts = async (isId: boolean, isName: boolean, isMail: boolean) => {
  return await prisma.contact.findMany({
    select: {
      id: isId,
      name: isName,
      email: isMail,
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
