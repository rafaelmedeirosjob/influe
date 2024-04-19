"use client";

import { UserRole } from "@prisma/client";
import { FormSuccess } from "@/components/form-success";
import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  allowedRole: UserRole;
};

export const RoleGate = ({
  allowedRole,
}: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    )
  } 

  return (
    <FormSuccess
            message="You are allowed to see this content!"
          />
  );
};
