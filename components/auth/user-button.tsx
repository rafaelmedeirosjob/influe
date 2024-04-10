"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons"
import { CiSettings } from "react-icons/ci";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";

export const UserButton = () => {
  const pathname = usePathname();
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
<div className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-gray-600 md:flex-none md:justify-start md:p-2 md:px-3">
<Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-gray-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>Account</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuItem>
            <CiSettings className="h-4 w-4 mr-2" />
            <Link href="/settings">
              Settings
            </Link>
          </DropdownMenuItem>

        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
