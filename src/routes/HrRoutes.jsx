import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import useHr from "../hooks/useHr";

const HrRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isHr , isHrLoading] = useHr();
  const location = useLocation();

  if (loading || isHrLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  if (user && isHr) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default HrRoutes;