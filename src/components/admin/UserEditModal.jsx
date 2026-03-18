import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "../ui/input"
import { useAuth0 } from "@auth0/auth0-react"
import { Switch } from "../ui/switch"

export default function UserEditModal({open, onOpenChange, user}){

    return(

        <>
        
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg text-text-primary font-bold">Editar usuario</DialogTitle>
        </DialogHeader>
        <form action="" className="flex flex-col gap-2">          
          <p className="text-text-primary">{user?.name}</p>
          <div className="flex flex-col gap-2 p-2">
            <p className="font-bold text-text-primary">Name:</p>
            <Input className="text-text-primary" placeholder="Name" value={user?.name}/>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <p className="font-bold text-text-primary">E-Mail:</p>
          <Input className="text-text-primary" placeholder="E-Mail" value={user?.email}/>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <p className="font-bold text-text-primary">Contraseña:</p>
          <Input className="text-text-primary" placeholder="Nueva contraseña" value={user?.password} type="password"/>
          </div>
          <div className="p-2 flex flex-col gap-4">
            <p className="font-bold">Estado:</p>
            <div className="flex items-center gap-2">
              <Switch checked={!user?.blocked} />
              <span className={user?.blocked ? "text-red-500" : "text-green-500"}>
                {user?.blocked ? "Inactivo" : "Activo"}
              </span>
            </div>
          </div>
          
        </form>


      </DialogContent>
    </Dialog>
        
        </>

    )


}