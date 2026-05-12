import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useAuth0 } from "@auth0/auth0-react"
import { useState, useEffect } from "react"

export default function RoleEditModal({ open, onOpenChange, role, onRoleUpdated }) {
  const { getAccessTokenSilently } = useAuth0()
  const isSuperAdmin = role?.name === "SuperAdmin"

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [active, setActive] = useState(true)
  const [infoLoading, setInfoLoading] = useState(false)
  const [infoError, setInfoError] = useState(null)
  const [infoSuccess, setInfoSuccess] = useState(false)

  const [allPermissions, setAllPermissions] = useState([])   // todos los de la API
  const [rolePermissions, setRolePermissions] = useState([]) // los que tiene el rol actualmente
  const [selectedPerms, setSelectedPerms] = useState([])     // los que el usuario selecciona
  const [permsLoading, setPermsLoading] = useState(false)
  const [permsError, setPermsError] = useState(null)
  const [permsSuccess, setPermsSuccess] = useState(false)

  // Precargamos datos cuando se abre el modal
  useEffect(() => {
    if (!open || !role) return

    // Info básica del rol
    const isActive = !role.description?.startsWith("[INACTIVO]")
    const cleanDesc = (role.description ?? "").replace(/^\[INACTIVO\] /, "")
    setName(role.name ?? "")
    setDescription(cleanDesc)
    setActive(isActive)
    setInfoError(null)
    setInfoSuccess(false)
    setPermsError(null)
    setPermsSuccess(false)

    // Traemos permisos disponibles y permisos del rol en paralelo
    const fetchPermissions = async () => {
      setPermsLoading(true)
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
        })
        const headers = { Authorization: `Bearer ${token}` }

        const [allRes, roleRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/permissions`, { headers }),
          fetch(`${import.meta.env.VITE_API_URL}/api/roles/${role.id}/permissions`, { headers })
        ])

        const allData = await allRes.json()
        const roleData = await roleRes.json()

        setAllPermissions(Array.isArray(allData) ? allData : [])
        setRolePermissions(Array.isArray(roleData) ? roleData : [])
        setSelectedPerms(
          Array.isArray(roleData) ? roleData.map(p => p.permission_name) : []
        )
      } catch (err) {
        setPermsError("Error cargando permisos")
      } finally {
        setPermsLoading(false)
      }
    }

    fetchPermissions()
  }, [open, role, getAccessTokenSilently])

  const togglePerm = (permValue) => {
    if (isSuperAdmin) return
    setSelectedPerms(prev =>
      prev.includes(permValue)
        ? prev.filter(p => p !== permValue)
        : [...prev, permValue]
    )
  }

  // Guardar nombre, descripción y estado
  const handleInfoSubmit = async () => {
    setInfoLoading(true)
    setInfoError(null)
    setInfoSuccess(false)

    const cleanOriginal = (role.description ?? "").replace(/^\[INACTIVO\] /, "")
    const originalActive = !role.description?.startsWith("[INACTIVO]")

    if (
      name.trim() === role.name &&
      description.trim() === cleanOriginal &&
      active === originalActive
    ) {
      setInfoError("No hay cambios para guardar")
      setInfoLoading(false)
      return
    }

    try {
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
      })

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/roles/${role.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
          active
        })
      })

      const data = await res.json()
      if (!res.ok) { setInfoError(data.error || "Error actualizando rol"); return }

      setInfoSuccess(true)
      onRoleUpdated?.()
    } catch {
      setInfoError("Error de conexión con el servidor")
    } finally {
      setInfoLoading(false)
    }
  }

  // Guardar permisos — calcula diff y llama POST y/o DELETE
  const handlePermsSubmit = async () => {
    if (isSuperAdmin) {
      setPermsError("No se pueden modificar permisos del rol SuperAdmin")
      return
    }

    setPermsLoading(true)
    setPermsError(null)
    setPermsSuccess(false)

    const before = rolePermissions.map(p => p.permission_name)
    const toAdd = selectedPerms.filter(p => !before.includes(p))
    const toRemove = before.filter(p => !selectedPerms.includes(p))

    if (toAdd.length === 0 && toRemove.length === 0) {
      setPermsError("No hay cambios en los permisos")
      setPermsLoading(false)
      return
    }

    try {
      const token = await getAccessTokenSilently({
        authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
      })
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }

      // Ejecutamos en paralelo si hay ambos
      await Promise.all([
        toAdd.length > 0 && fetch(`${import.meta.env.VITE_API_URL}/api/roles/${role.id}/permissions`, {
          method: "POST", headers, body: JSON.stringify({ permissions: toAdd })
        }),
        toRemove.length > 0 && fetch(`${import.meta.env.VITE_API_URL}/api/roles/${role.id}/permissions`, {
          method: "DELETE", headers, body: JSON.stringify({ permissions: toRemove })
        })
      ].filter(Boolean))

      // Actualizamos el estado base para que el diff funcione en la próxima edición
      setRolePermissions(
        allPermissions
          .filter(p => selectedPerms.includes(p.value))
          .map(p => ({ permission_name: p.value }))
      )

      setPermsSuccess(true)
      onRoleUpdated?.()
    } catch {
      setPermsError("Error de conexión con el servidor")
    } finally {
      setPermsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg text-text-primary font-bold">
            Editar rol
          </DialogTitle>
          <p className="text-text-primary">{role?.name}</p>
        </DialogHeader>

        <div className="flex flex-col gap-2">

          {/* Nombre */}
          <div className="flex flex-col gap-2 p-2">
            <p className="font-bold text-text-primary">Nombre:</p>
            <Input
              className="text-text-primary"
              placeholder="Nombre del rol"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-2 p-2">
            <p className="font-bold text-text-primary">Descripción:</p>
            <Input
              className="text-text-primary"
              placeholder="Descripción del rol"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Estado */}
          <div className="flex flex-col gap-2 p-2">
            <p className="font-bold text-text-primary">Estado:</p>
            <div className="flex items-center gap-2">
              <Switch
                className="cursor-pointer"
                checked={active}
                onCheckedChange={setActive}
              />
              <span className={active ? "text-green-500" : "text-red-500"}>
                {active ? "Activo" : "Inactivo"}
              </span>
            </div>
          </div>

          {infoError && <p className="text-sm text-red-500 px-2">{infoError}</p>}
          {infoSuccess && <p className="text-sm text-green-500 px-2">Rol actualizado correctamente</p>}

          <div className="flex justify-end gap-2 pt-2">
            <Button
              className="bg-brand-primary cursor-pointer hover:bg-brand-primary-90 border-2 border-solid border-brand-primary-80"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={infoLoading}
            >
              Cancelar
            </Button>
            <Button
              className="bg-brand-accent cursor-pointer hover:bg-brand-accent-80"
              onClick={handleInfoSubmit}
              disabled={infoLoading}
            >
              {infoLoading ? "Guardando..." : "Guardar cambios"}
            </Button>
          </div>

          {/* Separador */}
          <hr className="border-text-primary/20 my-2" />

          {/* Permisos */}
          <div className="flex flex-col gap-2 p-2">
            <p className="font-bold text-text-primary">Permisos:</p>
            {permsLoading ? (
              <p className="text-sm text-text-primary/60">Cargando permisos...</p>
            ) : (
              <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                {allPermissions.map((perm) => (
                  <label
                    key={perm.value}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 cursor-pointer accent-brand-primary"
                      checked={selectedPerms.includes(perm.value)}
                      disabled={isSuperAdmin}
                      onChange={() => togglePerm(perm.value)}
                    />
                    <div className="flex flex-col">
                      <span className="text-text-primary text-sm font-medium">{perm.value}</span>
                      <span className="text-text-primary/50 text-xs">{perm.description}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          {permsError && <p className="text-sm text-red-500 px-2">{permsError}</p>}
          {isSuperAdmin && <p className="text-sm text-yellow-500 px-2">SuperAdmin siempre conserva todos los permisos.</p>}
          {permsSuccess && <p className="text-sm text-green-500 px-2">Permisos actualizados correctamente</p>}

          <div className="flex justify-end pt-2">
            <Button
              className="bg-brand-accent cursor-pointer hover:bg-brand-accent-80"
              onClick={handlePermsSubmit}
              disabled={permsLoading || isSuperAdmin}
            >
              {permsLoading ? "Guardando..." : "Guardar permisos"}
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}
