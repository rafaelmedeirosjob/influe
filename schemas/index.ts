import * as z from "zod";
import { UserRole } from "@prisma/client";

interface CategoryResponse {
  categories: {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
  }[]
}

export interface Category {
  value: string
  name: string
}

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  category: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: "New password is required!",
    path: ["newPassword"]
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
  }, {
    message: "Password is required!",
    path: ["password"]
  })

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

const ItemSchema = z.object({
  // Define your object schema here
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  isCompany: z.boolean(),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  categories: z.array(ItemSchema).nonempty(),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
