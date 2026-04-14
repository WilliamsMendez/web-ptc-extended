import AdminHeader from "@/components/admin/AdminHeader"
import PermissionsCreateModal from "@/components/admin/Permissions/PermissionsCreateModal";
import PermissionsDataTable from "@/components/admin/Permissions/PermissionsDataTable"
import UserCreateModal from "@/components/admin/UserCreateModal";
import { Plus } from "lucide-react"
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PermissionGate from "@/components/admin/protection/PermissionGate";

export default function AdminPermissions(){

    const [open, setOpen] = useState(false);

    return(

        <>
        
            <AdminHeader title="Permisos" desc="Gestionar permisos disponibles"/>
        
            <div className="m-8">
                <PermissionGate requiredPermission="create:permissions">
                <div>
                    <button onClick={() => {setOpen(true)}} className="text-text-primary/70 border border-solid border-bg-120/70 bg-bg hover:bg-bg-110 cursor-pointer transition p-2 rounded-md flex gap-2 items-center my-4"><Plus/>Agregar Permiso</button>
                </div>
                </PermissionGate>
                
                <PermissionsDataTable/>
                <PermissionsCreateModal open={open} onOpenChange={setOpen}/>
            </div>


        </>

    )

}