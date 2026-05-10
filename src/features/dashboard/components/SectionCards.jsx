import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, FolderOpen, Pickaxe } from "lucide-react";

function SectionCards({ totalProjects, projectInProgress, projectsCompleted }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:col-span-3">
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardDescription>Total Proyectos</CardDescription>
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
              <FolderOpen className="size-4 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalProjects}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardDescription>En progreso</CardDescription>
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-amber-50 dark:bg-amber-950/40">
              <Pickaxe className="size-4 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {projectInProgress}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardDescription>Completados</CardDescription>
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-emerald-50 dark:bg-emerald-950/40">
              <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
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
