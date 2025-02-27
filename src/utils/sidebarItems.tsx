import { Ticket, Banknote } from "lucide-react";

export const sidebarItems = [{
    name:'Tickets Comprados',
    url:'/dashboard',
    icon:   <Banknote className="inline-block mr-2" size={20} />
},
// {
//     name:'Tickets Comprados',
//     url:'/dashboard/users',
//     icon:   <Banknote className="inline-block mr-2" size={20} />
// },
{
    name:'Raffles',
    url:'/dashboard/raffles',
    icon:   <Ticket className="inline-block mr-2" size={20} />
},
]