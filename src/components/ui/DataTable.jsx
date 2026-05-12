import { useEffect, useState, useCallback } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table"
import { Pen } from "lucide-react"
import UserEditModal from "../admin/UserEditModal"
import { LoaderOne } from "./loader"
import PermissionGate from "../admin/protection/PermissionGate"

export function DataTable() {
  const { getAccessTokenSilently } = useAuth0()
  const [users, setUsers] = useState([])
  const [userRoles, setUserRoles] = useState({}) // { user_id: [roles] }
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
      })

      const headers = { Authorization: `Bearer ${token}` }

      // Traemos usuarios
      const usersRes = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, { headers })
      const usersData = await usersRes.json()
      const usersList = Array.isArray(usersData) ? usersData : []
      setUsers(usersList)

      // Por cada usuario traemos sus roles en paralelo
      const rolesEntries = await Promise.allSettled(
        usersList.map(async (user) => {
          const rolesRes = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${encodeURIComponent(user.user_id)}/roles`, { headers })
          if (!rolesRes.ok) {
            throw new Error(`Error obteniendo roles para ${user.user_id}`)
          }
          const rolesData = await rolesRes.json()
          return [user.user_id, Array.isArray(rolesData) ? rolesData : []]
        })
      )

      setUserRoles((prev) => {
        const next = { ...prev }
        usersList.forEach((user, index) => {
          const result = rolesEntries[index]
          if (result.status === "fulfilled") {
            const [userId, roles] = result.value
            next[userId] = roles
            return
          }
          // Si falla una llamada puntual, conservamos el valor anterior
          // para evitar pisar roles reales con "Sin rol".
          next[user.user_id] = prev[user.user_id] ?? []
        })
        return next
      })

    } catch (err) {
      console.error("Error:", err)
    } finally {
      setLoading(false)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) return <LoaderOne />

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Último login</TableHead>
          <TableHead>Rol</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => {
          const roles = userRoles[user.user_id] ?? []
          const displayName = user.username ?? user.nickname ?? user.name ?? user.email
          return (
            <TableRow key={user.user_id}>
              <TableCell>{displayName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{new Date(user.last_login).toLocaleDateString("es-HN")}</TableCell>
              <TableCell>
                {roles.length > 0
                  ? roles.map(r => r.name).join(", ")
                  : <span className="text-text-primary/40 text-sm">Sin rol</span>
                }
              </TableCell>
              <TableCell>
                <span className={user.blocked ? "text-red-500" : "text-green-500"}>
                  {user.blocked ? "Inactivo" : "Activo"}
                </span>
              </TableCell>
              <TableCell>
                <PermissionGate requiredPermission="update:users">
                  <button onClick={() => { setSelectedUser(user); setOpen(true) }} className="p-1 rounded-sm text-text-primary cursor-pointer">
                    <Pen className="h-4 w-4" />
                  </button>
                </PermissionGate>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <UserEditModal
        open={open}
        onOpenChange={setOpen}
        user={selectedUser}
        userRoles={userRoles[selectedUser?.user_id] ?? []}
        onUserUpdated={fetchData}
      />
    </Table>
  )
}
