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

import { useTasks } from "../hooks/useTasks";
import { X } from "lucide-react";

function ProjectsTasksList({ tasksByProject }) {
  const { handleDeleteTask } = useTasks();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox />
          </TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Prioridad</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tasksByProject.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">{task.name}</TableCell>
            <TableCell>
              <Badge>{task.priority}</Badge>
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
                    onClick={() => handleDeleteTask(task.id)}
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
