'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="flex">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
        <span className="text-light-100">BukuKita</span>
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li className="">
          <Link href="/library" className={cn('text-base cursor-pointer capitalize', pathname === '/library' ? 'text-light-200' : 'text-light-100')}>
            Perpustakaan
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
