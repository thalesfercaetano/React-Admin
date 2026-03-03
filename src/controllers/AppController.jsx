import { useState } from "react";
import Layout from "../components/Layout";
import Home from "../views/Home";
import Cadastro from "../views/Cadastro";
import Produtos from "../views/Produtos";
import Clientes from "../views/Clientes";
import Entregas from "../views/Entregas";
import Relatorios from "../views/Relatorios";
import { CLIENTES_INICIAIS, PRODUTOS_INICIAIS } from "../model/initialState";
import "../App.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function AppController() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [paginaAtual, setPaginaAtual] = useState("home");
  const [clientes, setClientes] = useState(CLIENTES_INICIAIS);
  const [produtos, setProdutos] = useState(PRODUTOS_INICIAIS);

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

  function handleSair() {
    Swal.fire({
      title: "Sair do sistema?",
      text: "Você será deslogado.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, sair",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setLogado(false);
        Swal.fire({
          title: "Até logo!",
          text: "Você saiu do sistema.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }
    });
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
      onSair={handleSair}
    >
      {renderPagina()}
    </Layout>
  );
}

export default AppController;
