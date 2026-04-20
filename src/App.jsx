import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./contexts/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Toaster />
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
