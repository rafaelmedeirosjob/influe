'use client';
import { MdScheduleSend } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Metrics', href: '/dashboard', icon: IoBarChartSharp },
  {
    name: 'Proposes',
    href: '/dashboard/proposes',
    icon: MdScheduleSend,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-gray-600': pathname === link.href,
              },
            )}
>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
