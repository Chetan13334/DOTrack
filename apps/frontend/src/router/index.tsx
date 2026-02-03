import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Projects from "../pages/Project/Project";
import Deployments from "../pages/Deployments/Deployments";
import Landing from "../pages/Landing/Landing";
import { AppLayout } from "../Components/layout/AppLayout";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/*"
        element={
          <AppLayout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/deployments" element={<Deployments />} />
            </Routes>
          </AppLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);
