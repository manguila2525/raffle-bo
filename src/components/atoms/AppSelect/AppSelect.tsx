import { ChangeEvent, useState } from "react";

interface Props {
  options: {
    value: string | readonly string[] | number | undefined;
    label: string;
  }[];
  name: string;
  key: string;
}

const AppSelect = ({ options, name, key }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="custom-select">
      <select
        id={name}
        name={name}
        value={selectedValue}
        onChange={(e) => handleChange(e)}
      >
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AppSelect;
