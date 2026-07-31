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
      <ul className="flex items-center gap-8 text-sm text-zinc-300">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link relative px-1 py-2 font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? 'active text-white'
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
            className="btn-secondary text-sm"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
