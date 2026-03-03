import { useState } from "react";
import "./Clientes.css";

function Clientes({ clientes = [], onDeletar }) {
  const [busca, setBusca] = useState("");

  const filtrados = clientes.filter((c) => {
    const texto = `${c.nome} ${c.email} ${c.telefone || ""} ${c.endereco || ""}`.toLowerCase();
    return texto.includes(busca.toLowerCase());
  });

  return (
    <div className="page clientes-page">
      <header className="page-header">
        <h1>Clientes</h1>
        <p className="page-subtitle">Lista de clientes cadastrados no sistema.</p>
      </header>

      <div className="clientes-filtros">
        <input
          type="text"
          placeholder="Buscar cliente (nome, e-mail, telefone...)"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="busca-input"
        />
      </div>

      <div className="clientes-grid">
        {filtrados.map((c) => (
          <article key={c.id} className="cliente-card">
            <div className="cliente-icon">👤</div>
            <h3>{c.nome}</h3>
            <p className="cliente-email">{c.email}</p>
            <p className="cliente-telefone">{c.telefone || "—"}</p>
            {c.endereco && (
              <p className="cliente-endereco">{c.endereco}</p>
            )}
            <button
              type="button"
              className="btn-excluir"
              onClick={() => onDeletar(c.id)}
            >
              Excluir
            </button>
          </article>
        ))}
      </div>

      {filtrados.length === 0 && (
        <p className="sem-resultados">Nenhum cliente encontrado.</p>
      )}
    </div>
  );
}

export default Clientes;
