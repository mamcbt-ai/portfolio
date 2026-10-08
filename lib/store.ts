// Stores form submissions in Supabase (free tier) via its REST API.
// Required env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

export type SubmissionType = 'audit' | 'brief';

export interface Submission {
  id: number;
  type: SubmissionType;
  name: string;
  email: string;
  status: string;
  data: Record<string, unknown>;
  created_at: string;
}

function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Supabase env vars are not set');
  return { url, key };
}

export async function saveSubmission(
  type: SubmissionType,
  name: string,
  email: string,
  data: Record<string, unknown>
) {
  const { url, key } = config();
  const res = await fetch(`${url}/rest/v1/submissions`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ type, name, email, status: 'new', data }),
  });
  if (!res.ok) throw new Error(`Supabase insert failed: ${res.status}`);
}

export async function listSubmissions(): Promise<Submission[]> {
  const { url, key } = config();
  const res = await fetch(
    `${url}/rest/v1/submissions?select=*&order=created_at.desc&limit=200`,
    {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store',
    }
  );
  if (!res.ok) throw new Error(`Supabase read failed: ${res.status}`);
  return res.json();
}
