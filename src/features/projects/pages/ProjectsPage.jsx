import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { useProjects } from "../hooks/useProjects";
import { useState } from "react";

import ProjectsForm from "../components/ProjectsForm";
import ProjectsList from "../components/ProjectsList";
import emptyData from "/images/empty-data.svg";

function ProjectsPage() {
  const { projects, loading } = useProjects();
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const totalProjects = projects.length;

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{`Mis Proyectos (${totalProjects})`}</h1>

        <Dialog
          open={openDialog || isEditting}
          onOpenChange={() =>
            isEditting ? setIsEditting(!isEditting) : setOpenDialog(!openDialog)
          }
        >
          <DialogTrigger asChild>
            <Button variant="outline">Crear proyecto</Button>
          </DialogTrigger>

          <ProjectsForm
            setOpenDialog={setOpenDialog}
            isEditting={isEditting}
            setIsEditting={setIsEditting}
            selectedProject={selectedProject}
          />
        </Dialog>
      </div>

      {loading ? (
        <div className="w-full max-w-sm m-auto">
          <p className="text-center">Cargando proyectos...</p>
        </div>
      ) : projects.length > 0 ? (
        <ProjectsList
          projects={projects}
          setIsEditting={setIsEditting}
          setSelectedProject={setSelectedProject}
        />
      ) : (
        <div className="w-full max-w-sm m-auto">
          <div className="flex flex-col gap-6 items-center">
            <img src={emptyData} className="w-60 h-60" />
            <p className="text-center text-gray-600">
              No tienes proyectos agregados. Presiona el boton{" "}
              <strong>"Crear proyecto"</strong>
              para agregar uno a tu lista.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
