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
    <div className="login-container p-4 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-center text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <FormLogin onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
