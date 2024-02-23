import { NewTaskButton } from "@/components/tasks/new-task-button";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

interface TaskPageHeaderProps {
  title: string;
}

export const TaskPageHeader = ({ title }: TaskPageHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold">{title}</p>
      <NewTaskButton asChild mode="modal">
        <Button variant="default" size="default">
          <PlusIcon />
        </Button>
      </NewTaskButton>
    </div>
  );
};
