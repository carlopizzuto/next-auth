"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Task } from "@prisma/client";
import { TaskItem } from "@/components/tasks/task-item";
import { useState, useEffect } from "react";
import { getTasksByUserId } from "@/data/task";
import { useCurrentUser } from "@/hooks/use-current-user";
import { TaskPageHeader } from "@/components/tasks/task-header";

const MyTasksPage = () => {
  const user = useCurrentUser();
  if (typeof user?.tasks == undefined) {
    console.log(typeof user?.tasks);
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasksByUserId(user?.id);
      console.log(tasksData);
      setTasks(tasksData);
    };
    fetchTasks();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <TaskPageHeader title="My Tasks"/>
      </CardHeader>
      <CardContent>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            name={task.name}
            complete={task.complete}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default MyTasksPage;
