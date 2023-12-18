import { useCallback, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Dev from "../pages/dev/Dev";
import { useAuthWatchdog, useIsAuthenticated } from "../hooks/auth";

/**
 * Renders routes depending on Authenticated or Anonymous users
 * @component Routes
 */
const Routes = () => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const isAuthenticated = useIsAuthenticated();

  const afterLogin = useCallback(() => {
    setRefresh((old) => old + 1); // Force re-render
    setLoading(false);
  }, []);

  const afterLogout = useCallback(() => {
    setRefresh((old) => old + 1); // Force re-render
    setLoading(false);
  }, []);

  // Create Auth watchdog, that calls our callbacks wen user is logged in or logged out
  useAuthWatchdog(afterLogin, afterLogout);

  if (loading) {
    return <>Loading...</>;
  }

  console.log(
    `Routes() - isAuthenticated: ${isAuthenticated}, refreshCount: ${refresh}`
  );
  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <PrivateRoutes key={refresh} />
      ) : (
        <PublicRoutes key={refresh} />
      )}
    </BrowserRouter>
  );
};
export default Routes;
