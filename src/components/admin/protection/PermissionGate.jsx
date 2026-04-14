import { usePermissions } from "@/hooks/usePermissions";
import { cloneElement } from "react";

const PermissionGate = ({ children, requiredPermission }) => {
  const { hasPermission, loading } = usePermissions();

  if (loading) return null;

  if (!hasPermission(requiredPermission)) {
    return cloneElement(children, { disabled: true });
  }

  return children;
};

export default PermissionGate;