import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2Icon } from "lucide-react";
import { useProjects } from "@/features/projects/hooks/useProjects";

function DeleteModal({ title, description, projectId }) {
  const { handleDeleteProyect } = useProjects();

  return (
    <AlertDialogContent size="sm">
      <AlertDialogHeader>
        <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
          <Trash2Icon />
        </AlertDialogMedia>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel variant="outline">Cancelar</AlertDialogCancel>
        <AlertDialogAction
          variant="destructive"
          onClick={() => handleDeleteProyect(projectId)}
        >
          Eliminar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default DeleteModal;
