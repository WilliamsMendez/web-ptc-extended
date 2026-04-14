import { useState, useEffect, useCallback } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { LoaderOne } from "@/components/ui/loader"
import { Pencil, Trash } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import PermissionsEditModal from "./PermissionsEditModal"
import PermissionGate from "../protection/PermissionGate"

export default function PermissionsDataTable() {

    const { getAccessTokenSilently } = useAuth0()
    const [permissions, setPermissions] = useState([])
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [selectedEditPermission, setSelectedEditPermission] = useState(null)
    const [selectedPermission, setSelectedPermission] = useState(null)
    const [deleting, setDeleting] = useState(false)
    const [error, setError] = useState("")

    const fetchPermissions = useCallback(async () => {
        try {
            setLoading(true)
            const token = await getAccessTokenSilently({
                authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
            })
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/permissions`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const data = await res.json()
            setPermissions(Array.isArray(data) ? data : [])
        } catch {
            setPermissions([])
        } finally {
            setLoading(false)
        }
    }, [getAccessTokenSilently])

    useEffect(() => {
        fetchPermissions()
    }, [fetchPermissions])

    const handleDelete = async () => {
        if (!selectedPermission) return
        setError("")

        try {
            setDeleting(true)
            const token = await getAccessTokenSilently({
                authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
            })

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/permissions`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ value: selectedPermission.value })
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || "Error al eliminar el permiso.")
                return
            }

            setOpenModal(false)
            setSelectedPermission(null)
            fetchPermissions()

        } catch {
            setError("Error de conexión.")
        } finally {
            setDeleting(false)
        }
    }

    if (loading) return <LoaderOne />

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold">Permiso</TableHead>
                    <TableHead className="font-bold">Descripción</TableHead>
                    <TableHead className="font-bold">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {permissions.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center text-text-primary/40">
                            No hay permisos creados
                        </TableCell>
                    </TableRow>
                ) : (
                    permissions.map((permission) => (
                        <TableRow key={permission.value}>
                            <TableCell>{permission.value}</TableCell>
                            <TableCell>{permission.description}</TableCell>
                            <TableCell>
                                <div className="flex gap-4">
                                    <PermissionGate requiredPermission="update:permissions">

                                    <button className="p-1 cursor-pointer" onClick={() => {setSelectedEditPermission(permission), setOpenEditModal(true)}}><Pencil className="h-4" /></button>
                                    </PermissionGate>      
                                    <button
                                        type="button"
                                        className="p-1 cursor-pointer"
                                        onClick={() => {
                                            setSelectedPermission(permission)
                                            setOpenModal(true)
                                            setError("")
                                        }}
                                    >
                                        <Trash color="red" className="h-4" />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>

            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="bg-bg p-20">
                    <form className="flex flex-col gap-6 justify-center" onSubmit={(e) => { e.preventDefault(); handleDelete() }}>
                        <div>
                            <h1 className="text-rose-500 font-bold text-lg">¿Quiere borrar este permiso?</h1>
                            <p className="text-text-primary">
                                Se borrará <span className="font-bold">{selectedPermission?.value}</span> también de los roles que lo tienen
                            </p>
                        </div>

                        {error && <p className="text-rose-500 text-sm">{error}</p>}

                        <div className="flex gap-2">
                            <button
                                type="submit"
                                disabled={deleting}
                                className="p-2 rounded-md bg-rose-600 text-text-primary-static hover:bg-rose-700 cursor-pointer disabled:opacity-50"
                            >
                                {deleting ? "Eliminando..." : "Aceptar"}
                            </button>
                            <button
                                type="button"
                                className="p-2 bg-bg-110 cursor-pointer rounded-md text-text-primary hover:bg-bg-120"
                                onClick={() => setOpenModal(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <PermissionsEditModal
  open={openEditModal}
  onOpenChange={setOpenEditModal}
  permission={selectedEditPermission}
  onUpdated={fetchPermissions}
/>
        </Table>
    )
}