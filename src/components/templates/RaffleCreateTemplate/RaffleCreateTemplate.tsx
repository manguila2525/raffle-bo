import { RaffleCreate } from "../../organisms/RaffleCreate/RaffleCreate";
import { Breadcrumb } from "../../molecules/Breadcrumb/Breadcrumb";
export const RaffleCreateTemplate = () => {
  return (
    <>
      <Breadcrumb title="Crear rifa" back />
      <RaffleCreate />
    </>
  );
};
