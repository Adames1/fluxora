import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useTasks } from "@/features/projects/hooks/useTasks";
import { useProjects } from "@/features/projects/hooks/useProjects";

function TasksTable() {
  const { allTasks } = useTasks();
  const { projects } = useProjects();

  const pendingTasks = allTasks.filter((task) => task.is_completed === false);

  return (
    <div className="lg:col-span-2 space-y-2">
      <h2 className="text-md font-semibold">Tareas pendientes</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre de tarea</TableHead>
            <TableHead>Proyecto asociado</TableHead>
            <TableHead>Estado de tarea</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {pendingTasks.map((pending) => {
            const project = projects.find((p) => p.id === pending.project_id);

            return (
              <TableRow key={pending.id}>
                <TableCell>{pending.name}</TableCell>
                <TableCell>{project?.name || "Sin proyecto"}</TableCell>
                <TableCell>
                  <Badge>
                    {pending.is_completed ? "Completada" : "Pendiente"}
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default TasksTable;
