
import { useEffect, useState } from "react";
import { AppModal } from "../../atoms/AppModal/AppModal";
import { TableUsers } from "../../molecules/TableUsers/TableUsers";
import { getUsers } from "../../../services/userServices";

interface Ticket {
    id: number;
    purchaseDate: string;
    paymentStatus: 'Paid' | 'Pending';
    ticketStatus: 'Active' | 'Inactive';
    winnerStatus: 'Winner' | 'Not Winner';
    prize?: string;
    drawDate?: string;
}
export interface User {
  email: string
  id: string
  lastName: string
  name: string
  phone: string
  tickets: Ticket[]
}
export const Users = () => {
    


  const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [dataSelected, setDataSelected] = useState<User | null>(null);
    const handleOpenModal = (data:User) => {
        setIsModalOpen(true);

        
        setDataSelected(data);
        setUsers(users)
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      useEffect(() => {
        getUsers().then(res =>  {
        const newData =  res.map((data)  => {
            return {...data, tickets:[]}
          })
          setUsers(newData)
        }).catch(() => setUsers([]))
      }, []);
    return (
        <div className="container mx-auto px-4 py-10">
        <div className="overflow-x-auto">
        <TableUsers  handleModal={handleOpenModal} users={users}/>

        </div>

        {isModalOpen && (
            <AppModal isOpen={isModalOpen} onClose={handleCloseModal}>
            <h2 className="text-lg font-bold">Detalles de Tickets</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Fecha de compra</th>
                  <th className="px-4 py-2 text-left">Estado de pago</th>
                  <th className="px-4 py-2 text-left">Estado del boleto</th>
                  <th className="px-4 py-2 text-left">Estado ganador</th>
                  <th className="px-4 py-2 text-left">Premio</th>
                  <th className="px-4 py-2 text-left">Fecha de sorteo</th>
                </tr>
              </thead>
              <tbody>
                {dataSelected && dataSelected.tickets.map((ticket: Ticket) => (
                  <tr key={ticket.id}>
                    <td className="px-4 py-2">{ticket.id}</td>
                    <td className="px-4 py-2">{ticket.purchaseDate}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full ${ticket.paymentStatus === 'Paid' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                        {ticket.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full ${ticket.ticketStatus === 'Active' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                        {ticket.ticketStatus}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full ${ticket.winnerStatus === 'Winner' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}>
                        {ticket.winnerStatus}
                      </span>
                    </td>
                    <td className="px-4 py-2">{ticket.prize || 'N/A'}</td>
                    <td className="px-4 py-2">{ticket.drawDate || 'No sorteado'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AppModal>
      )}
      </div>
      
    );
};
