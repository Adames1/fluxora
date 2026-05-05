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

import { Link } from "react-router";
import { Trash, Pen, ClipboardCheck } from "lucide-react";
import DeleteModal from "@/components/shared/DeleteModal";
import { useTasks } from "../hooks/useTasks";

function ProjectsCard({ project, projectsLabel }) {
  const { allTasks } = useTasks();

  const totalTasks = allTasks.filter((task) => task.project_id === project.id);

  const tasksCompleted = totalTasks.filter(
    (task) => task.is_completed !== false,
  ).length;

  const percentageCompleted = (tasksCompleted / totalTasks.length) * 100;

  return (
    <Card size="sm">
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{projectsLabel[project.status]}</Badge>
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
              <div className="flex items-center gap-2">
                <h2>{`${tasksCompleted} / ${totalTasks.length}`}</h2>
                <h3>Tareas</h3>
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
              <Button variant="outline" size="sm">
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
                  <Button variant="destructive" size="sm">
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
              projectId={project.id}
            />
          </AlertDialog>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectsCard;
