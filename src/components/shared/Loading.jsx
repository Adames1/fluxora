import { Loader2Icon } from "lucide-react";

function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="flex items-center gap-2">
        <Loader2Icon size={32} className="animate-spin" />
        <p className="text-lg font-medium">Cargando...</p>
      </div>
    </div>
  );
}

export default Loading;
