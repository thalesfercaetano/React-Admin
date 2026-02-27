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
  const [clientes, setClientes] = useState([
    { id: 1, nome: "Maria Silva", email: "maria@email.com", telefone: "(11) 98765-4321" },
    { id: 2, nome: "João Santos", email: "joao@email.com", telefone: "(21) 91234-5678" },
    { id: 3, nome: "Ana Oliveira", email: "ana@email.com", telefone: "(31) 99876-5432" },
  ]);
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Notebook Pro 15", preco: 4299.9, estoque: 12, categoria: "Eletrônicos" },
    { id: 2, nome: "Mouse Gamer", preco: 189.9, estoque: 45, categoria: "Periféricos" },
    { id: 3, nome: "Teclado Mecânico", preco: 349.0, estoque: 28, categoria: "Periféricos" },
    { id: 4, nome: "Monitor 27\" 4K", preco: 1899.0, estoque: 8, categoria: "Eletrônicos" },
    { id: 5, nome: "Webcam HD", preco: 279.9, estoque: 32, categoria: "Periféricos" },
    { id: 6, nome: "Headset Bluetooth", preco: 199.0, estoque: 56, categoria: "Áudio" },
  ]);

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

  function deletarCliente(id){
    Swal.fire({
      title: 'Tem certeza?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        setClientes(clientes.filter(cliente => cliente.id !== id))
        Swal.fire(
          'Deletado!',
          'Cliente deletado com sucesso.',
          'success'
        )
      }
    })
  }

  function deletarProduto(id){
    Swal.fire({
      title: 'Tem certeza?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        setProdutos(produtos.filter(produto => produto.id !== id))
        Swal.fire(
          'Deletado!',
          'Produto deletado com sucesso.',
          'success'
        )
      }
    })
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
        return (
          <Produtos produtosCadastrados={produtos} onDeletar={deletarProduto} />
        );
      case "clientes":
        return (
          <Clientes clientes={clientes} onDeletar={deletarCliente} />
        );
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
