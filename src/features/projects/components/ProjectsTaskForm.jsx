import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { taskDefaultValues, taskSchema } from "../validations/tasks.schemas";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTasks } from "../hooks/useTasks";
import { useParams } from "react-router";

function ProjectsTaskForm({ setOpenDialog }) {
  const { id } = useParams();

  const { handleAddTask } = useTasks();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: taskDefaultValues,
  });

  return (
    <DialogContent className="sm:max-w-sm">
      <form
        onSubmit={handleSubmit((data) =>
          handleAddTask(id, data, reset, setOpenDialog),
        )}
        className="space-y-6"
      >
        <DialogHeader>
          <DialogTitle>Crear Tarea</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <Label htmlFor="name">Nombre o Titulo de tarea</Label>
            <Input id="name" name="name" {...register("name")} />
            {errors.name && (
              <FieldDescription>{errors.name.message}</FieldDescription>
            )}
          </Field>

          <Field>
            <Label htmlFor="priority">Prioridad de tarea</Label>
            <Controller
              name="priority"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="selecciona una prioridad..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Prioridades</SelectLabel>
                      <SelectItem value="low">Baja</SelectItem>
                      <SelectItem value="medium">Media</SelectItem>
                      <SelectItem value="high">Alta</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </Field>
        </FieldGroup>

        <Separator />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Guardar tarea</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default ProjectsTaskForm;
