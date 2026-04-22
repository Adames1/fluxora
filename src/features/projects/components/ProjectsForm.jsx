import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

import { useForm, Controller } from "react-hook-form";
import {
  projectSchema,
  projectDefaultValues,
} from "../validations/projects.schemas";
import { zodResolver } from "@hookform/resolvers/zod";

function ProjectsForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: projectDefaultValues,
  });

  return (
    <DialogContent className="sm:max-w-sm">
      <form
        onSubmit={handleSubmit((data) => onSubmit(data, reset))}
        className="space-y-6"
      >
        <DialogHeader>
          <DialogTitle>Crear proyecto</DialogTitle>
          <DialogDescription>
            Ingresa los datos necesarios para crear un nuevo proyecto.
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <Label htmlFor="name">Nombre de proyecto</Label>
            <Input id="name" name="name" {...register("name")} />
            {errors.name && (
              <FieldDescription>{errors.name.message}</FieldDescription>
            )}
          </Field>

          <Field>
            <Label htmlFor="description">Descripcion</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="De que se trata el proyecto?"
              {...register("description")}
            />
            {errors.description && (
              <FieldDescription>{errors.description.message}</FieldDescription>
            )}
          </Field>

          <Field>
            <Label htmlFor="status">Estado del proyecto</Label>
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="selecciona un estado..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Estados</SelectLabel>
                      <SelectItem value="pending">Pendiente</SelectItem>
                      <SelectItem value="in_progress">En progreso</SelectItem>
                      <SelectItem value="completed">Completado</SelectItem>
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
          <Button type="submit">Guardar proyecto</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export default ProjectsForm;
