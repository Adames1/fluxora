import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./contexts/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
