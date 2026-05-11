import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  registerDefaultValues,
} from "../validations/auth.schemas";
import { toast } from "sonner";
import { createNewUser } from "../services/auth.services";
import { PATHS } from "@/routes/paths";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: registerDefaultValues,
  });

  const onSubmit = async (data) => {
    try {
      await createNewUser(data.full_name, data.email, data.password);
      toast.success("Bienvenido a FlowMe!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Crear una cuenta</CardTitle>
          <CardDescription>
            Introduce tu información a continuación para crear tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nombre Completo</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register("full_name")}
                />
              </Field>
              {errors.full_name && (
                <FieldDescription>{errors.full_name.message}</FieldDescription>
              )}
              <Field>
                <FieldLabel htmlFor="email">Correo Electronico</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <FieldDescription>{errors.email.message}</FieldDescription>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <FieldDescription>{errors.password.message}</FieldDescription>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirmar Contraseña
                </FieldLabel>
                <Input
                  id="confirm-password"
                  type="password"
                  {...register("confirm_password")}
                />
                {errors.confirm_password && (
                  <FieldDescription>
                    {errors.confirm_password.message}
                  </FieldDescription>
                )}
              </Field>
              <FieldGroup>
                <Field>
                  <Button type="submit">Crear Cuenta</Button>

                  <FieldDescription className="px-6 text-center">
                    ¿Ya tienes una cuenta?{" "}
                    <Link to={PATHS.signIn}>Iniciar Sesión</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;
