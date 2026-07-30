'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-6 text-sm text-zinc-300">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition ${
                isActive(link.href)
                  ? 'text-white font-semibold border-b-2 border-white pb-1'
                  : 'hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="mailto:mamcbt@gmail.com"
            className="inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
