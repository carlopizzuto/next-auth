import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";
import { Task } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  tasks?: Task[];
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}