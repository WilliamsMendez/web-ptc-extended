import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const usePermissions = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }

    const fetchPermissions = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE
          },
        });

        const decoded = jwtDecode(token);
        setPermissions(decoded.permissions || []);
      } catch (e) {
        console.error("Error obteniendo permisos:", e);
        setPermissions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPermissions();
  }, [isAuthenticated, getAccessTokenSilently]);

  const hasPermission = (permission) => permissions.includes(permission);

  return { permissions, hasPermission, loading };
};