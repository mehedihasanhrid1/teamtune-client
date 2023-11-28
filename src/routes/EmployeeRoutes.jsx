import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useEmployee from "../hooks/useEmployee";

const EmployeeRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isEmployee , isEmployeeLoading] = useEmployee();
  const location = useLocation();

  if (loading || isEmployeeLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
      </div>
    );
  }

  if (user && isEmployee) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default EmployeeRoutes;
