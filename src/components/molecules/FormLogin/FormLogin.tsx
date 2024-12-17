import React, { useState } from "react";
import AppInput from "../../atoms/AppInput/AppInput";
import { AppButton } from "../../atoms/AppButton/AppButton";

interface FormLoginProps {
  onSubmit: (credentials: { username: string; password: string }) => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <AppInput
        label="Nombre de Usuario"
        value={username}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setUsername(e.target.value)
        }
        placeholder="Ingresa tu usuario"
      />
      <AppInput
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setPassword(e.target.value)
        }
        placeholder="Ingresa tu contraseña"
      />
      <AppButton
        title="Iniciar Sesión"
        className="bg-blue-500 hover:bg-blue-700"
        onClick={() => console.log("Botón presionado")}
      />
    </form>
  );
};

export default FormLogin;
