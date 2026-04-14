import { Table } from "@/components/ui/table"
import { DataTable } from "@/components/ui/DataTable"
import AdminHeader from "@/components/admin/AdminHeader"
import UserEditModal from "@/components/admin/UserEditModal"
import {   Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import { useState } from "react"
import UserCreateModal from "@/components/admin/UserCreateModal"


export default function AdminUsers(){

    const [open, setOpen] = useState(false)

    return(

        <>
        
        <AdminHeader title="Usuarios" desc="Usuarios"/>
    
            <div className="m-8">
                <div>
                    <button onClick={() => {setOpen(true) }} className="text-text-primary/70 border border-solid border-bg-120/70 bg-bg hover:bg-bg-110 cursor-pointer transition p-2 rounded-md flex gap-2 items-center my-4"><Plus/>Agregar Usuario</button>
                </div>
                <DataTable/>
                <UserCreateModal open={open} onOpenChange={setOpen}/>
            </div>
        
        </>

    )        

}