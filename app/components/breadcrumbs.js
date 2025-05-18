'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label='breadcrumb'>
      <ol className='flex gap-3 underline text-xl my-5 px-10'>
        {pathParts.map((part, idx) => {
          const href = '/' + pathParts.slice(0, idx + 1).join('/');
          const label = part
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('-');
          return (
            <li key={href}>
              <Link href={href}>{label}</Link>
              {idx < pathParts.length - 1 && <span>{' >>'}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
