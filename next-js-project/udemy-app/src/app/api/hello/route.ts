import { NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json([
    {
      id: 1,
      name: '山田-1',
    },
    {
      id: 2,
      name: '山田-2',
    },
    {
      id: 3,
      name: '山田-3',
    },
  ]);
};
