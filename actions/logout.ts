"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // do server stuff
  await signOut();
};