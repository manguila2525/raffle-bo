import { useEffect, useState } from "react";
import { AppModal } from "../../atoms/AppModal/AppModal";
import { TableUsers } from "../../molecules/TableUsers/TableUsers";
import { denyTicket, getTicketsDetail, getUsers, verifyTicket } from "../../../services/userServices";
import { AppButton } from "../../atoms/AppButton/AppButton";

export interface User {
  email: string;
  id: string;
  lastName: string;
  name: string;
  phone: string;
  unverifiedTicketsCount: number;
}

export interface Ticket {
  id: string;
  ticketNumber: string;
  userId: string;
  raffleId: string;
  raffleTitle: string;
  paymentReference: string;
  verified: boolean;
  createdAt: string;
  paymentId: string;
  raffleEndDate: string;
}

export const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [dataSelected, setDataSelected] = useState<User | null>();
  const handleOpenModal = (data: User) => {
    setIsModalOpen(true);
    setDataSelected(data);
    setUsers(users);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTickets([]);
  };

  const handleAccept = async(id:string) => {
    if (dataSelected) {
     await verifyTicket(id)
    }
  }

  const handleCancel = async(id:string) => {
    if (dataSelected) {
     await denyTicket(id)
    }
  }

  useEffect(() => {
    getUsers()
      .then((res) => {
        const newData = res.map((data) => {
          return { ...data };
        });
        setUsers(newData);
      })
      .catch(() => setUsers([]));
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }
    getTicketsDetail(dataSelected?.id ?? "")
      .then((res) => {
        const newData = res.map((data) => {
          return { ...data };
        });
        setTickets(newData);
      })
      .catch(() => setTickets([]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen, handleAccept, handleCancel]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="overflow-auto">
        <TableUsers handleModal={handleOpenModal} users={users} />
      </div>

      {isModalOpen && (
        <AppModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2 className="text-lg font-bold">Detalles de Tickets</h2>
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Rifa</th>
                <th className="px-4 py-2 text-left">Numero de ticket</th>
                <th className="px-4 py-2 text-left">Referencia de pago</th>
                <th className="px-4 py-2 text-left">Fecha de compra</th>
                <th className="px-4 py-2 text-left">Fecha de sorteo</th>
                <th className="px-4 py-2 text-center">Verificacion</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 text-center text-[14px]">
                    {ticket.id}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px]">{`${ticket.raffleTitle.slice(
                    0,
                    40
                  )}...`}</td>
                  <td className="px-4 py-2 text-center text-[14px]">
                    {ticket.ticketNumber}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px]">
                    {ticket.paymentReference}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px]">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px]">
                    {new Date(ticket.raffleEndDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-center text-[14px] flex gap-2">
                    <AppButton title="Aceptar" onClick={() => handleAccept(ticket.id)}/> 
                    <AppButton title="Denegar" onClick={() => handleCancel(ticket.id)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AppModal>
      )}
    </div>
  );
};
