import { useState } from "react";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (usuario === "" || senha === "") {
      alert("Preencha usuário e senha!");
      return;
    }

    onLogin(usuario);
  }

  return (
    <div className="login-container">
      <h1>🔐 Login</h1>

      <input
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={entrar}>Entrar</button>
    </div>
  );
}

export default Login;
