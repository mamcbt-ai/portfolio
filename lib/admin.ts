import { createHash } from 'crypto';

// Session cookie value is derived from ADMIN_PASSWORD, so the raw password is never stored in the browser.
export function sessionToken(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return createHash('sha256').update(`admin:${password}`).digest('hex');
}

export function isAdminSession(value?: string): boolean {
  const token = sessionToken();
  return !!token && !!value && value === token;
}
