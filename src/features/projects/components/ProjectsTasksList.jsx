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

// Colores semánticos por prioridad
const PRIORITY_BADGE = {
  low: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border-0",
  medium:
    "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-0",
  high: "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border-0",
};

function ProjectsTasksList({
  tasksByProjectId,
  onDeleteTask,
  onToggleTaskComplete,
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8"></TableHead>
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
              className={`font-medium ${task.is_completed ? "text-muted-foreground line-through" : ""}`}
            >
              {task.name}
            </TableCell>
            <TableCell>
              <Badge className={PRIORITY_BADGE[task.priority]}>
                {TASK_PRIORITY_LABEL[task.priority]}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                className={
                  task.is_completed
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-0"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-0"
                }
              >
                {task.is_completed ? "Completada" : "Pendiente"}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
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
