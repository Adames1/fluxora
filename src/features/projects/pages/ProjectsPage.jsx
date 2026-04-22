import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProjectsForm from "../components/ProjectsForm";
import { getAllProjects } from "../services/projects.services";
import { useEffect, useState } from "react";
import ProjectsList from "../components/ProjectsList";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getAllProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

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

      <ProjectsList projects={projects} />
    </div>
  );
}

export default ProjectsPage;
