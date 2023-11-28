import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin , isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminRoutes;
