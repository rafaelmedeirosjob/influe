"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from '@/components/ui/dashboard/nav-links';
import InflueLogo from '@/components/ui/influe-logo';
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-gray-600 p-4 md:h-40"
          href="/"
        >
          <div className="w-32 text-white md:w-40">
            <InflueLogo />
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          <UserButton />
        </div>
      </div>
  );
};
