import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContext";

export const ProtectedRoutes = () => {
  const { client } = useContext(AuthContext);

  return client ? <Outlet /> : <Navigate to="/" />;
};
