"use client";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NewTaskForm } from "./new-task-form";

interface NewTaskButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const NewTaskButton = ({
  children,
  mode = "redirect",
  asChild,
}: NewTaskButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/tasks");
  };

  if (mode === "modal") {
    return (
      <Dialog >
        <DialogTrigger asChild={asChild}>
          {children}
        </DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          <NewTaskForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
