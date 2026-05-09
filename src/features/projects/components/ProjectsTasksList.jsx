import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { X } from "lucide-react";
import { TASK_PRIORITY_LABEL } from "../constants";

function ProjectsTasksList({
  tasksByProjectId,
  onDeleteTask,
  onToggleTaskComplete,
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">{/* <Checkbox /> */}</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Prioridad</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tasksByProjectId.map((task) => (
          <TableRow
            key={task.id}
            data-state={task.is_completed ? "selected" : undefined}
          >
            <TableCell>
              <Checkbox
                id={task.id}
                name={task.id}
                checked={task.is_completed}
                onCheckedChange={(checked) => {
                  onToggleTaskComplete(task.id, checked);
                }}
              />
            </TableCell>
            <TableCell
              className={`font-medium ${task.is_completed ? "text-gray-500 line-through" : ""}`}
            >
              {task.name}
            </TableCell>
            <TableCell>
              <Badge>{TASK_PRIORITY_LABEL[task.priority]}</Badge>
            </TableCell>
            <TableCell>
              <Badge>{task.is_completed ? "Completada" : "Pendiente"}</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    <X />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Eliminar tarea</p>
                </TooltipContent>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProjectsTasksList;
