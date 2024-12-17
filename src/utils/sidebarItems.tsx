import { Home, User, Ticket, PlusCircle, Settings } from "lucide-react";

export const sidebarItems = [{
    name:'Dashboard',
    url:'/dashboard',
    icon:   <Home className="inline-block mr-2" size={20} />
},
{
    name:'Usuarios',
    url:'/users',
    icon:   <User className="inline-block mr-2" size={20} />
},
{
    name:'Raffles',
    url:'/raffles',
    icon:   <Ticket className="inline-block mr-2" size={20} />
},
{
    name:'Creacion Raffle',
    url:'/create',
    icon:   <PlusCircle className="inline-block mr-2" size={20} />
},
{
    name:'Configuracion',
    url:'/settings',
    icon:   <Settings className="inline-block mr-2" size={20} />
}]