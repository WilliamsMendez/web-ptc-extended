import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function PermissionsCreateModal({ open, onOpenChange, onCreated }) {
    const { getAccessTokenSilently } = useAuth0()
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (!value.trim() || !description.trim()) {
            setError("Todos los campos son obligatorios.")
            return
        }

        try {
            setLoading(true)
            const token = await getAccessTokenSilently({
                authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
            })

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/permissions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ value: value.trim(), description: description.trim() })
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || "Error al crear el permiso.")
                return
            }

            setValue("")
            setDescription("")
            onOpenChange(false)
            onCreated?.()  // para refrescar la tabla

        } catch {
            setError("Error de conexión.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-text-primary">Crear Nuevo Permiso</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-text-primary">
                    <div className="flex flex-col gap-3">
                        <p>Nombre de permiso:</p>
                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="ej: read:reportes"
                            disabled={loading}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>Descripción del permiso:</p>
                        <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="ej: Leer reportes del sistema"
                            disabled={loading}
                        />
                    </div>

                    {error && <p className="text-rose-500 text-sm">{error}</p>}

                    <div className="flex gap-2 p-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="p-2 bg-bg-90 rounded-md cursor-pointer disabled:opacity-50 hover:bg-bg-110"
                        >
                            {loading ? "Creando..." : "Aceptar"}
                        </button>
                        <button
                            type="button"
                            className="p-2 bg-rose-600 rounded-md cursor-pointer text-text-primary-static hover:bg-rose-400"
                            onClick={() => onOpenChange(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}