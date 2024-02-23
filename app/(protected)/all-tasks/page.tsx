"use client";

import { TaskItem } from "@/components/tasks/task-item";
import { Task } from "@prisma/client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAllTasks, toggleTaskComplete } from "@/data/task";
import { TaskPageHeader } from "@/components/tasks/task-header";

const AllTasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getAllTasks();
      console.log(tasksData);
      setTasks(tasksData);
    };
    fetchTasks();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Card>
      <CardHeader>
        <TaskPageHeader title="All Tasks" />
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

export default AllTasksPage;
