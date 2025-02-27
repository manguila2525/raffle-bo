import { Breadcrumb } from "../molecules/Breadcrumb/Breadcrumb";
import { Users } from "../organisms/Users/Users";

export const UsersTemplate = () => {
  return (
    <>
      <Breadcrumb title="Tickets Comprados" />
      <Users />
    </>
  );
};
