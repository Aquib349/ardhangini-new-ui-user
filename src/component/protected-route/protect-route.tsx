import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated,
}) => {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setAuthChecked(true);
    }
  }, [isAuthenticated]);

  if (!authChecked) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
