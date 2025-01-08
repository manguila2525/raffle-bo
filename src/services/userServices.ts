import { Ticket } from '../components/organisms/Users/Users'
import {axiosRaffle} from '../config/axios'
export interface User {
    email: string
    id: string
    lastName: string
    name: string
    phone: string
    unverifiedTicketsCount: number
  }
//   interface Ticket {
//     id: number;
//     purchaseDate: string;
//     paymentStatus: 'Paid' | 'Pending';
//     ticketStatus: 'Active' | 'Inactive';
//     winnerStatus: 'Winner' | 'Not Winner';
//     prize?: string;
//     drawDate?: string;
// }
export const getUsers:()=>Promise<User[]> = async() => {
       const {data} = await axiosRaffle.get('/users')
       return data
}

export const getTicketsDetail:(id:string)=>Promise<Ticket[]> = async(id) => {
  const {data} = await axiosRaffle.get(`/back-office/users/${id}/tickets`)
  return data as Ticket[]
}

export const verifyTicket:(id:string)=>Promise<void> = async(id) => {
   await axiosRaffle.patch(`/back-office/tickets/${id}/approve`)
}

export const denyTicket:(id:string)=>Promise<void> = async(id) => {
  await axiosRaffle.patch(`/back-office/tickets/${id}/deny`)
}