import { useState, useEffect, useCallback } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { LoaderOne } from "@/components/ui/loader"
import PermissionGate from "../protection/PermissionGate"
import RoleEditModal from "./RoleEditModal"
import { Pen } from "lucide-react"

export default function RolesDataTable() {
  const { getAccessTokenSilently } = useAuth0()
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)

  const fetchRoles = useCallback(async () => {
    try {
      setLoading(true)
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
      })
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/roles`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      setRoles(Array.isArray(data) ? data : [])
    } catch {
      setRoles([])
    } finally {
      setLoading(false)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    fetchRoles()
  }, [fetchRoles])

  if (loading) return <LoaderOne />

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rol</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Editar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-text-primary/40">
                No hay roles creados
              </TableCell>
            </TableRow>
          ) : (
            roles.map((role) => {
              const isActive = !role.description?.startsWith("[INACTIVO]")
              const cleanDescription = (role.description ?? "").replace(/^\[INACTIVO\] /, "") || "—"
              return (
                <TableRow key={role.id}>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{cleanDescription}</TableCell>
                  <TableCell>
                    <span className={isActive ? "text-green-500" : "text-red-500"}>
                      {isActive ? "Activo" : "Inactivo"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <PermissionGate requiredPermission="update:roles">
                      <button
                        onClick={() => { setSelectedRole(role); setOpen(true) }}
                        className="p-1 rounded-sm text-text-primary cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Pen className="h-4 w-4" />
                      </button>
                    </PermissionGate>
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>

      <RoleEditModal
        open={open}
        onOpenChange={setOpen}
        role={selectedRole}
        onRoleUpdated={fetchRoles}
      />
    </>
  )
}