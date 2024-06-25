import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries());

  return new NextResponse(JSON.stringify(headers), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
