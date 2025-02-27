import { useEffect, useState } from "react";
import { TableRaffles } from "../../molecules/TableRaffles/TableRaffles";
import { getRaffles } from "../../../services/rafflesServices";
import { IDetailRaffle } from "../../../interface/raffle";
import { LabelImage } from "../../atoms/LabelImage/LabelImage";
import img from '../../../assets/captus.png'

interface Ticket {
  id: number;
  purchaseDate: string;
  paymentStatus: "Paid" | "Pending";
  ticketStatus: "Active" | "Inactive";
  winnerStatus: "Winner" | "Not Winner";
  prize?: string;
  drawDate?: string;
}
export interface User {
  email: string;
  id: string;
  lastName: string;
  name: string;
  phone: string;
  tickets: Ticket[];
}
export const RaffleList = () => {
  const [raffles, setRaffles] = useState<IDetailRaffle[]>([]);
  const handleOpenModal = () => {
    setRaffles(raffles);
  };

  useEffect(() => {
    getRaffles()
      .then((res) => {
        setRaffles(res);
      })
      .catch(() => setRaffles([]));
  }, []);
  return <>
  {raffles.length > 0 ?<TableRaffles handleModal={handleOpenModal} raffles={raffles} />: <div className="h-[45vh] flex items-end justify-center">
      <LabelImage label="Sin Rifas Creadas" img={img}/>
      </div>}
  </>;
};
