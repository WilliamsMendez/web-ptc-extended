import { useEffect, useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import { Pen } from "lucide-react"

export function DataTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data) // agregá esto
        setUsers(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-gray-400">Cargando usuarios...</p>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Último login</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.user_id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{new Date(user.last_login).toLocaleDateString("es-HN")}</TableCell>
            <TableCell><span className={user.blocked ? "text-red-500" : "text-green-500"}>{user.blocked ? "Inactivo" : "Activo"}</span></TableCell>
            <TableCell>
              <button className="p-1 rounded-sm text-text-primary"><Pen className="h-4 w-4"/></button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}