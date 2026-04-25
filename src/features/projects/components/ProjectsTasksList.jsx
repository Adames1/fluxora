import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useTasks } from "../hooks/useTasks";
import { Trash2 } from "lucide-react";

function ProjectsTasksList({ tasksByProject }) {
  const { handleDeleteTask } = useTasks();
  return (
    <ul className="space-y-2">
      {tasksByProject.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-2 border rounded-lg bg-muted/30"
        >
          <div className="flex items-center gap-2">
            <Checkbox />
            <span>{task.name}</span>
          </div>

          <div className="flex items-center gap-6">
            <Badge>{task.priority}</Badge>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <Trash2 />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Eliminar tarea</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectsTasksList;
