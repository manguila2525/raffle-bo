
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
    users:User[],
    handleModal: (user:User) => void
}
export const TableUsers = ({users,handleModal}:Props) => {
  return (
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Nombre</th>
                  <th className="px-4 py-2 text-left">APELLIDO</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Número de teléfono</th>
                  <th className="px-4 py-2 text-left">Tickets comprados</th>
                  <th className="px-4 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.lastName}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.phone}</td>
                    <td className="px-4 py-2">{user.tickets.length}</td>
                    <td className="px-4 py-2">
                      <div className="relative inline-block text-left">
                        
                        <AppButton title="Ver detalles" onClick={()=>handleModal(user)}/>
           
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  )
}
