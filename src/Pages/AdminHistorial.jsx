import { useEffect, useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import AdminHeader from "@/components/admin/AdminHeader"


export default function AdminHistorial(){

    return(
        
    <>

        <AdminHeader title="Historial" desc="Historial"/>
    
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Paginas</TableHead>
                    <TableHead>Visitas</TableHead>
                    <TableHead>Tiempo Promedio</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Home</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>1s</TableCell>
                </TableRow>
            </TableBody>
        </Table>    
    
    </>

    )

}