import { Loader2Icon } from "lucide-react";

function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <div className="flex items-center gap-2">
        <Loader2Icon size={32} className="animate-spin text-primary" />
        <p className="text-lg font-medium text-foreground">Cargando...</p>
      </div>
    </div>
  );
}

export default Loading;
