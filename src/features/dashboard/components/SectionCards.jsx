import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, FolderOpen, Pickaxe } from "lucide-react";

function SectionCards({ totalProjects, projectInProgress, projectsCompleted }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardDescription>Total Proyectos</CardDescription>
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-blue-50">
              <FolderOpen className="size-4 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalProjects}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardDescription>Proyectos en progreso</CardDescription>
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-orange-50">
              <Pickaxe className="size-4 text-orange-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {projectInProgress}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardDescription>Proyectos Completados</CardDescription>
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-green-50">
              <Check className="size-4 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {projectsCompleted}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}

export default SectionCards;
