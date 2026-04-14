import AdminProtectedError from "../AdminProtectedError";
import { usePermissions } from "@/hooks/usePermissions";

const ProtectedRoute = ({ children, requiredPermission }) => {
  const { hasPermission, loading } = usePermissions();

  // Mientras carga el token, no mostramos nada todavía
  if (loading) return null;

  // Si no tiene el permiso, mostramos el componente de error
  if (!hasPermission(requiredPermission)) {
    return <AdminProtectedError />;
  }

  // Si tiene el permiso, mostramos la página normal
  return children;
};

export default ProtectedRoute;