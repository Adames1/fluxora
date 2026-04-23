import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProjectsForm from "../components/ProjectsForm";
import ProjectsList from "../components/ProjectsList";
import { useProjects } from "../hooks/useProjects";

function ProjectsPage() {
  const { projects, loading } = useProjects();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Mis Proyectos (4)</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Crear proyecto</Button>
          </DialogTrigger>

          <ProjectsForm />
        </Dialog>
      </div>

      {loading ? (
        <p>Cargando proyectos...</p>
      ) : (
        <ProjectsList projects={projects} />
      )}
    </div>
  );
}

export default ProjectsPage;
