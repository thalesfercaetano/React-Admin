import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/Produtos";
import Clientes from "./pages/Clientes";
import Entregas from "./pages/Entregas";
import Relatorios from "./pages/Relatorios";
import "./App.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function App() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [paginaAtual, setPaginaAtual] = useState("home");
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);

  function login(e) {
    e?.preventDefault();
    if (usuario.trim() && senha) {
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Login realizado com sucesso!",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      }).then(() => setLogado(true));
    } else {
      Swal.fire(

      "Erro!",

      "Preencha usuário e senha!",

      "error"

      )
    }
  }

  function handleCadastrar(item) {
    if (item.tipo === "cliente") {
      setClientes((prev) => [...prev, { ...item, id: Date.now() }]);
    } else {
      setProdutos((prev) => [
        ...prev,
        {
          id: Date.now(),
          nome: item.nome,
          preco: item.preco,
          estoque: item.estoque,
          categoria: item.categoria || "Outros",
        },
      ]);
    }
  }

  if (!logado) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-logo">⚙️</div>
          <h1>Sistema Admin</h1>
          <p className="login-subtitle">Entre com suas credenciais</p>
          <form onSubmit={login} className="login-form">
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
            />
            <button type="submit">Entrar</button>
          </form>
          <p className="login-hint">Use qualquer usuário e senha para entrar (demo).</p>
        </div>
      </div>
    );
  }

  function renderPagina() {
    switch (paginaAtual) {
      case "home":
        return <Home />;
      case "cadastro":
        return (
          <Cadastro onCadastrar={handleCadastrar} clientes={clientes} />
        );
      case "produtos":
        return <Produtos produtosCadastrados={produtos} />;
      case "clientes":
        return <Clientes clientesCadastrados={clientes} />;
      case "entregas":
        return <Entregas />;
      case "relatorios":
        return <Relatorios />;
      default:
        return <Home />;
    }
  }

  return (
    <Layout
      paginaAtual={paginaAtual}
      setPaginaAtual={setPaginaAtual}
      usuario={usuario}
      onSair={() => setLogado(false)}
    >
      {renderPagina()}
    </Layout>
  );
}

export default App;
