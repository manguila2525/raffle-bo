
import { IDetailRaffle } from '../../../interface/raffle';
import { getDayComplete } from '../../../utils/date';
import { AppButton } from '../../atoms/AppButton/AppButton';
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

interface Props {
    raffles:IDetailRaffle[],
    handleModal: (item:IDetailRaffle) => void
}
export const TableRaffles = ({raffles,handleModal}:Props) => {
  return (
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left"></th>
                  <th className="px-4 py-2 text-left">Nombre Rifa</th>
                  <th className="px-4 py-2 text-left">Precio ticket</th>
                  <th className="px-4 py-2 text-left">Cantidad disponible</th>
                  <th className="px-4 py-2 text-left">Fecha de sorteo</th>
                  <th className="px-4 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {raffles.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="px-4 py-2"><img width={150} src={item.cover} alt={item.title} /></td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2">${item.ticketPrice}</td>
                    <td className="px-4 py-2">{item.totalTickets}</td>
                    <td className="px-4 py-2">{getDayComplete(item.endDate)}</td>
                    <td className="px-4 py-2">
                      <div className="relative inline-block text-left">
                        
                        <AppButton title="Editar" onClick={()=>handleModal(item)}/>
           
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  )
}
