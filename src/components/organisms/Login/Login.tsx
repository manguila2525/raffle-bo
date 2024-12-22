import React, { useContext } from "react";
import FormLogin from "../../molecules/FormLogin/FormLogin";
import { UserContext } from "../../../context/UserContext";

const Login: React.FC = () => {
  const { setAuth, setUsername } = useContext(UserContext)!;

  const handleLogin = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    // Establecer el usuario y contraseña de prueba
    const validUsername = "admin";
    const validPassword = "password123";

    // Validar las credenciales
    if (username === validUsername && password === validPassword) {
      setAuth(true); // Cambiar el estado de autenticación
      setUsername(username); // Guardar el nombre de usuario en el contexto
      alert("Login successful!");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-4 bg-white shadow-md rounded p-8">
      <h2 className="text-start text-2xl font-bold">Iniciar Sesión</h2>
      <p className="text-start">
        Ingresa tus credenciales para acceder a tu cuenta
      </p>
      <FormLogin onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
