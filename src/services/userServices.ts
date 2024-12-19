import {axiosRaffle} from '../config/axios'
export interface User {
    email: string
    id: string
    lastName: string
    name: string
    phone: string
    tickets: Ticket[]
  }
  interface Ticket {
    id: number;
    purchaseDate: string;
    paymentStatus: 'Paid' | 'Pending';
    ticketStatus: 'Active' | 'Inactive';
    winnerStatus: 'Winner' | 'Not Winner';
    prize?: string;
    drawDate?: string;
}
export const getUsers:()=>Promise<User[]> = async() => {
       const {data} = await axiosRaffle.get('/users')
       return data
}