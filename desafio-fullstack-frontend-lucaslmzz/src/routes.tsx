import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes/index";
import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/teste" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;
