import { useNavigate } from "react-router-dom";
import { RaffleList } from "../../organisms/RaffleList/RaffleList";
import { Breadcrumb } from "../../molecules/Breadcrumb/Breadcrumb";

export const RafflesTemplate = () => {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb
        title="Raffles"
        buttonTitle="Crear Rifa"
        onClick={() => navigate("/dashboard/raffles/create-raffle")}
      />
      <RaffleList />
    </>
  );
};
