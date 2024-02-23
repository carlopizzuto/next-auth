"use server"

import { db } from "@/lib/db";

export const getTasksByUserId = async (userId: string | undefined) => {
  try {
    const tasks = await db.task.findMany({
      where: { userId: userId },
    });

    return tasks;
  } catch {
    return [];
  }
};

export const toggleTaskComplete = async (id:string | undefined, complete: boolean) => {
  try {
    await db.task.update({ where: { id }, data: { complete } });

    return true
  } catch {
    return false
  }
}

export const getAllTasks = async () => {
  try {
    const tasks = await db.task.findMany({
      where: {
        complete: false,
      },
    });

    console.log({tasks: tasks})

    return tasks;
  } catch {
    return []
  }
};
