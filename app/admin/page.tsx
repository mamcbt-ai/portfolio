import { cookies } from 'next/headers';
import { listSubmissions, Submission } from '@/lib/store';
import { isAdminSession } from '@/lib/admin';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin', robots: { index: false, follow: false } };

function LoginForm({ error }: { error: boolean }) {
  return (
    <div className="container-max max-w-md section-padding">
      <h1 className="heading-md mb-6">Admin Login</h1>
      <form method="POST" action="/api/admin/login" className="space-y-4">
        <input
          type="password"
          name="password"
          required
          placeholder="Admin password"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white"
        />
        {error && <p className="text-sm text-red-400">Wrong password.</p>}
        <button type="submit" className="btn-primary">Log in</button>
      </form>
    </div>
  );
}

function gmailCompose(to: string, subject: string, body: string) {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to, su: subject, body });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

function Row({ label, value }: { label: string; value: unknown }) {
  if (value === undefined || value === null || value === '') return null;
  return (
    <p className="text-sm text-zinc-300">
      <span className="text-zinc-500">{label}:</span> {String(value)}
    </p>
  );
}

function SubmissionCard({ item }: { item: Submission }) {
  const d = item.data as Record<string, unknown>;
  return (
    <div className="card space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="badge text-xs">
          {item.type === 'audit' ? 'Free Audit' : 'Project Brief'}
        </span>
        <span className="text-xs text-zinc-500">
          {new Date(item.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        </span>
      </div>
      <h3 className="font-semibold text-white">{item.name}</h3>
      <a
        href={gmailCompose(item.email, 'Re: Your free project audit request', `Hi ${item.name},\n\n`)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-400 hover:underline"
      >
        {item.email}
      </a>
      <Row label="Company" value={d.company} />
      <Row label="Phone" value={d.phone} />
      <Row label="Project type" value={d.projectType} />
      <Row label="Budget" value={d.budget} />
      <Row label="Timeline" value={d.timeline} />
      <Row label="Status" value={d.currentStatus} />
      <Row label="Challenges" value={d.challenges} />
      <p className="whitespace-pre-wrap text-sm text-zinc-400">
        {String(d.description ?? d.projectDescription ?? '')}
      </p>
      <a
        href={gmailCompose(item.email, 'Re: Your free project audit request', `Hi ${item.name},\n\n`)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary text-sm inline-block"
      >
        Reply in Gmail
      </a>
    </div>
  );
}

type Filter = 'all' | 'audit' | 'brief';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'audit', label: 'Free Audits' },
  { key: 'brief', label: 'Project Briefs' },
];

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; type?: string }>;
}) {
  const jar = await cookies();
  const authed = isAdminSession(jar.get('admin_session')?.value);
  const { error, type } = await searchParams;

  if (!authed) {
    return <LoginForm error={error === '1'} />;
  }

  const filter: Filter = type === 'audit' || type === 'brief' ? type : 'all';

  let all: Submission[] = [];
  let loadError = false;
  try {
    all = await listSubmissions();
  } catch (e) {
    console.error('Admin load failed:', e);
    loadError = true;
  }

  const items = filter === 'all' ? all : all.filter((s) => s.type === filter);

  return (
    <div className="container-max section-padding space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="heading-md">Submissions ({items.length})</h1>
        <a href="/api/admin/login" className="btn-secondary text-sm">Log out</a>
      </div>
      <div className="flex flex-wrap gap-3">
        {FILTERS.map((f) => (
          <a
            key={f.key}
            href={f.key === 'all' ? '/admin' : `/admin?type=${f.key}`}
            className={`badge text-xs ${filter === f.key ? 'ring-2 ring-blue-400' : ''}`}
          >
            {f.label} ({f.key === 'all' ? all.length : all.filter((s) => s.type === f.key).length})
          </a>
        ))}
      </div>
      {loadError && (
        <p className="text-red-400">
          Could not load submissions. Check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel.
        </p>
      )}
      {!loadError && items.length === 0 && (
        <p className="text-zinc-400">No submissions yet.</p>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <SubmissionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
