import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email }});

    return user;
  } catch {
    null;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    if (id === undefined) {
      // Handle the case where id is undefined, or throw an error
      throw new Error("id is undefined");
    }
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    // Handle or log the error appropriately
    console.error(error);
    return null;
  }
};
