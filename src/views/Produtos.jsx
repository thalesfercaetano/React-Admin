import { useState } from "react";
import "./Produtos.css";

function Produtos({ produtosCadastrados = [], onDeletar }){
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("todas");
  const todosProdutos = produtosCadastrados;

  const categorias = ["todas", ...new Set(todosProdutos.map((p) => p.categoria || "Geral"))];

  const filtrados = todosProdutos.filter((p) => {
    const nomeMatch = p.nome.toLowerCase().includes(busca.toLowerCase());
    const catMatch = categoriaFiltro === "todas" || (p.categoria || "Geral") === categoriaFiltro;
    return nomeMatch && catMatch;
  });

  function formatarPreco(val) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);
  }

  return (
    <div className="page produtos-page">
      <header className="page-header">
        <h1>Produtos</h1>
        <p className="page-subtitle">Visualize e gerencie o catálogo de produtos.</p>
      </header>

      <div className="produtos-filtros">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="busca-input"
        />
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          className="categoria-select"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "todas" ? "Todas categorias" : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="produtos-grid">
        {filtrados.map((p) => (
          <article key={p.id ?? p.nome} className="produto-card">
            <div className="produto-icon">📦</div>
            <h3>{p.nome}</h3>
            <p className="produto-preco">{formatarPreco(p.preco)}</p>
            <p className="produto-estoque">
              Estoque: <strong>{p.estoque ?? 0}</strong> un.
            </p>
            <span className="produto-categoria">{p.categoria || "Geral"}</span>
            <button
              type="button"
              className="btn-excluir"
              onClick={() => onDeletar(p.id)}
            >
              Excluir
            </button>
          </article>
        ))}
      </div>

      {filtrados.length === 0 && (
        <p className="sem-resultados">Nenhum produto encontrado.</p>
      )}
    </div>
  );
}

export default Produtos;
