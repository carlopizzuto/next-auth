"use server";

import * as z from "zod";

import { NewTaskSchema } from "@/schemas";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

export const newTask = async (values: z.infer<typeof NewTaskSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  if (!user.id) {
    return { error: "Unauthorized" };
  }

  const validatedFields = NewTaskSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, description, dueDate } = validatedFields.data;

  await db.task.create({
    data: {
      name: name,
      description: description,
      due_at: dueDate,
      userId: user.id,
    },
  });

  return { success: "Task created!" };
};
