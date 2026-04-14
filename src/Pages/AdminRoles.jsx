import { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import AdminHeader from "@/components/admin/AdminHeader"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { LoaderOne } from "@/components/ui/loader"
import RolesDataTable from "@/components/admin/roles/RolesDataTable"
import { Plus } from "lucide-react"
import RolCreateModal from "@/components/admin/roles/RolCreateModal"

export default function AdminRoles() {

    const [open, setOpen] = useState(false)

  return (
    <>
      <AdminHeader title="Roles" desc="Roles" />

      <div className="flex flex-col jusitfy-center m-8 max-w-330">
                <div>
                    <button onClick={() => {setOpen(true) }} className="text-text-primary/70 border border-solid border-bg-120/70 bg-bg hover:bg-bg-110 cursor-pointer transition p-2 rounded-md flex gap-2 items-center my-4"><Plus/>Agregar Rol</button>
                </div>
        <RolesDataTable/>
        <RolCreateModal open={open} onOpenChange={setOpen}/>
        

      </div>
      
    </>
  )
}