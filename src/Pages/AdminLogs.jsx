import { useState, useEffect, useCallback } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { LoaderOne } from "@/components/ui/loader"
import AdminHeader from "@/components/admin/AdminHeader"

const ACCIONES_LABELS = {
  CREAR_USUARIO: "Crear usuario",
  EDITAR_USUARIO: "Editar usuario",
  CAMBIAR_CONTRASEÑA: "Cambiar contraseña",
  ASIGNAR_ROL: "Asignar rol",
  REEMPLAZAR_ROL: "Reemplazar rol",
  CREAR_ROL: "Crear rol",
  ACTIVAR_ROL: "Activar rol",
  DESACTIVAR_ROL: "Desactivar rol",
  CREAR_PERMISO: "Crear permiso",
  EDITAR_PERMISO: "Editar permiso",
  ELIMINAR_PERMISO: "Eliminar permiso",
  ASIGNAR_PERMISOS_ROL: "Asignar permisos a rol",
  QUITAR_PERMISOS_ROL: "Quitar permisos de rol",
}

function formatFecha(iso) {
  const d = new Date(iso)
  return d.toLocaleString("es-HN", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  })
}

export default function AdminLogs() {
  const { getAccessTokenSilently } = useAuth0()
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchLogs = useCallback(async () => {
    try {
      setLoading(true)
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
      })
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auditoria`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      setLogs(Array.isArray(data) ? data : [])
    } catch {
      setLogs([])
    } finally {
      setLoading(false)
    }
  }, [getAccessTokenSilently])

  useEffect(() => {
    fetchLogs()
  }, [fetchLogs])

  return (
    <>
      <AdminHeader title="Logs" desc="Ver las acciones realizadas por los administradores" />

      {loading ? <LoaderOne /> : (

        <Table className="mx-4">
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Fecha</TableHead>
              <TableHead className="font-bold">Acción</TableHead>
              <TableHead className="font-bold">Realizado por</TableHead>
              <TableHead className="font-bold">Detalle</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-text-primary/40">
                  No hay logs registrados
                </TableCell>
              </TableRow>
            ) : (
              logs.map((log, i) => (
                <TableRow key={i}>
                  <TableCell className="whitespace-nowrap">{formatFecha(log.timestamp)}</TableCell>
                  <TableCell>{ACCIONES_LABELS[log.accion] ?? log.accion}</TableCell>
                  <TableCell className="text-text-primary/60 text-sm">{log.realizadoPor}</TableCell>
                  <TableCell className="text-sm text-text-primary/60">
                    {Object.entries(log.detalle ?? {}).map(([k, v]) => (
                      <span key={k} className="block">
                        <span className="font-medium">{k}:</span> {typeof v === "object" ? JSON.stringify(v) : String(v)}
                      </span>
                    ))}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </>
  )
}