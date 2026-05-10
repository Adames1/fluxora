import DeleteModal from "@/components/shared/DeleteModal";
import { Link } from "react-router";
import { Trash, Pen, ClipboardCheck } from "lucide-react";
import { useTasks } from "../hooks/useTasks";
import { PROJECT_STATUS_LABEL } from "../constants";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useProjects } from "../hooks/useProjects";

// Colores semánticos por estado de proyecto
const STATUS_BADGE = {
  pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border-0",
  in_progress:
    "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-400 border-0",
  completed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-0",
};

function ProjectsCard({ project, setIsEditting, setSelectedProject }) {
  const { allTasks } = useTasks();
  const { handleDeleteProyect } = useProjects();

  const totalTasks = allTasks.filter((task) => task.project_id === project.id);

  const tasksCompleted = totalTasks.filter(
    (task) => task.is_completed !== false,
  ).length;

  const percentageCompleted = totalTasks.length
    ? Math.round((tasksCompleted / totalTasks.length) * 100)
    : 0;

  return (
    <Card size="sm">
      <CardHeader>
        <CardAction>
          <Badge className={STATUS_BADGE[project.status]}>
            {PROJECT_STATUS_LABEL[project.status]}
          </Badge>
        </CardAction>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>
          {project.description || "Proyecto sin descripción"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Field className="w-full">
          <FieldLabel htmlFor="progress-upload">
            <div className="flex items-center justify-between w-full">
              <span>Progreso</span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  {tasksCompleted}
                </span>
                <span>/</span>
                <span>{totalTasks.length}</span>
                <span>tareas</span>
              </div>
            </div>
          </FieldLabel>
          <Progress value={percentageCompleted} id="progress-upload" />
        </Field>
      </CardContent>

      <Separator />

      <CardFooter>
        <div className="w-full flex items-center justify-end gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/projects/${project.id}`}>
              <ClipboardCheck />
              <span>Ver Tareas</span>
            </Link>
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsEditting(true);
                  setSelectedProject(project);
                }}
              >
                <Pen />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Editar proyecto</p>
            </TooltipContent>
          </Tooltip>

          <AlertDialog>
            <Tooltip>
              <TooltipTrigger asChild>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash />
                  </Button>
                </AlertDialogTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Eliminar proyecto</p>
              </TooltipContent>
            </Tooltip>

            <DeleteModal
              title="¿Eliminar proyecto?"
              description="¿Estás seguro de que quieres eliminar este proyecto? Ten en cuenta que este proceso no se puede deshacer."
              onConfirm={() => handleDeleteProyect(project.id)}
            />
          </AlertDialog>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectsCard;
