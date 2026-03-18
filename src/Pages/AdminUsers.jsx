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

export default function AdminUsers(){

    return(

        <>
        
        <AdminHeader title="Usuarios" desc="Usuarios"/>

            <div className="m-8">
                
                <DataTable/>

            </div>
        
        </>

    )        

}