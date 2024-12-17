import React from "react";
import FormLogin from "../../molecules/FormLogin/FormLogin";

const Login: React.FC = () => {
  const handleLogin = (credentials: { username: string; password: string }) => {
    console.log("Credenciales enviadas:", credentials);
  };

  return (
    <div className="login-container p-4 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-center text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <FormLogin onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
