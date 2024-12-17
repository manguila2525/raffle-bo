
import { useState } from "react";
import { AppModal } from "../../atoms/AppModal/AppModal";
import { TableUsers } from "../../molecules/TableUsers/TableUsers";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    tickets: Ticket[];
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

export const Users = () => {
    

  
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            firstName: "Juan",
            lastName: "Pérez",
            email: "juan.perez@example.com",
            phoneNumber: "+1234567890",
            tickets: [
                {
                    id: 1,
                    purchaseDate: "2023-01-01",
                    paymentStatus: "Paid",
                    ticketStatus: "Active",
                    winnerStatus: "Not Winner",
                    prize: "$1000",
                    drawDate: "2023-06-30"
                },
                {
                    id: 2,
                    purchaseDate: "2023-02-15",
                    paymentStatus: "Pending",
                    ticketStatus: "Active",
                    winnerStatus: "Not Winner",
                    prize: undefined,
                    drawDate: undefined
                } 
            ] 
        },
        {
            id: 2,
            firstName: "Maria",
            lastName: "Pérez",
            email: "juan.perez@example.com",
            phoneNumber: "+1234567890",
            tickets: [
                {
                    id: 1,
                    purchaseDate: "2023-01-01",
                    paymentStatus: "Paid",
                    ticketStatus: "Active",
                    winnerStatus: "Not Winner",
                    prize: "$2000",
                    drawDate: "2023-06-30"
                },
                {
                    id: 2,
                    purchaseDate: "2023-02-15",
                    paymentStatus: "Pending",
                    ticketStatus: "Active",
                    winnerStatus: "Not Winner",
                    prize: undefined,
                    drawDate: undefined
                } 
            ] 
        } 
    ]);
    const [dataSelected, setDataSelected] = useState<User | null>(null);
    const handleOpenModal = (data:User) => {
        setIsModalOpen(true);

        
        setDataSelected(data);
        setUsers(users)
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };


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
