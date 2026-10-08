import { NextRequest, NextResponse } from 'next/server';
import { sessionToken } from '@/lib/admin';

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const password = String(form.get('password') || '');
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    return NextResponse.redirect(new URL('/admin?error=1', request.url), 303);
  }

  const res = NextResponse.redirect(new URL('/admin', request.url), 303);
  res.cookies.set('admin_session', sessionToken() as string, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}

export async function GET(request: NextRequest) {
  const res = NextResponse.redirect(new URL('/admin', request.url), 303);
  res.cookies.set('admin_session', '', { path: '/', maxAge: 0 });
  return res;
}
