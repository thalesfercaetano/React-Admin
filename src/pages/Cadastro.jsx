import { useState } from "react";
import "./Cadastro.css";

function Cadastro({ onCadastrar, clientes }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("cliente"); // cliente ou produto
  const [produtoNome, setProdutoNome] = useState("");
  const [produtoPreco, setProdutoPreco] = useState("");
  const [produtoEstoque, setProdutoEstoque] = useState("");
  const [produtoCategoria, setProdutoCategoria] = useState("Outros");
  const [mensagem, setMensagem] = useState("");

  const CATEGORIAS_PRODUTO = [
    { value: "Eletrônicos", label: "Eletrônico" },
    { value: "Áudio", label: "Áudio" },
    { value: "Periféricos", label: "Periféricos" },
    { value: "Outros", label: "Outros" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setMensagem("");

    if (tipo === "cliente") {
      if (!nome.trim() || !email.trim()) {
        setMensagem("Preencha nome e e-mail.");
        return;
      }
      onCadastrar?.({ tipo: "cliente", nome: nome.trim(), email: email.trim(), telefone: telefone.trim() });
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("Cliente cadastrado com sucesso!");
    } else {
      if (!produtoNome.trim() || !produtoPreco) {
        setMensagem("Preencha nome e preço do produto.");
        return;
      }
      onCadastrar?.({
        tipo: "produto",
        nome: produtoNome.trim(),
        preco: parseFloat(produtoPreco) || 0,
        estoque: parseInt(produtoEstoque, 10) || 0,
        categoria: produtoCategoria,
      });
      setProdutoNome("");
      setProdutoPreco("");
      setProdutoEstoque("");
      setProdutoCategoria("Outros");
      setMensagem("Produto cadastrado com sucesso!");
    }

    setTimeout(() => setMensagem(""), 3000);
  }

  return (
    <div className="page cadastro-page">
      <header className="page-header">
        <h1>Cadastro</h1>
        <p className="page-subtitle">Cadastre clientes ou produtos no sistema.</p>
      </header>

      <div className="cadastro-tabs">
        <button
          className={tipo === "cliente" ? "active" : ""}
          onClick={() => setTipo("cliente")}
        >
          👤 Cliente
        </button>
        <button
          className={tipo === "produto" ? "active" : ""}
          onClick={() => setTipo("produto")}
        >
          📦 Produto
        </button>
      </div>

      <section className="cadastro-form-section">
        <form onSubmit={handleSubmit} className="cadastro-form">
          {tipo === "cliente" ? (
            <>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>Nome do produto</label>
                <input
                  type="text"
                  placeholder="Ex: Notebook, Mouse..."
                  value={produtoNome}
                  onChange={(e) => setProdutoNome(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Preço (R$)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  value={produtoPreco}
                  onChange={(e) => setProdutoPreco(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Estoque</label>
                <input
                  type="number"
                  min="0"
                  placeholder="Quantidade"
                  value={produtoEstoque}
                  onChange={(e) => setProdutoEstoque(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Categoria</label>
                <select
                  value={produtoCategoria}
                  onChange={(e) => setProdutoCategoria(e.target.value)}
                  className="form-select-categoria"
                >
                  {CATEGORIAS_PRODUTO.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          {mensagem && <p className="form-mensagem">{mensagem}</p>}
          <button type="submit" className="btn-submit">
            Cadastrar
          </button>
        </form>

        {clientes?.length > 0 && (
          <div className="ultimos-cadastros">
            <h3>Últimos clientes cadastrados</h3>
            <ul>
              {clientes.slice(-5).reverse().map((c, i) => (
                <li key={i}>{c.nome} — {c.email}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default Cadastro;
