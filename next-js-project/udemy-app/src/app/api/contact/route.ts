import { getContacts } from '@/lib/contact';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('isName') === 'true';

  const contacts = await getContacts(true, status, true);
  return NextResponse.json(contacts);
}
