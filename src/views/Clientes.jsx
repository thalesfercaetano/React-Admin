import "./Clientes.css";

function Clientes({ clientes = [], onDeletar }) {

  return (
    <div className="page clientes-page">
      <header className="page-header">
        <h1>Clientes</h1>
        <p className="page-subtitle">Lista de clientes cadastrados no sistema.</p>
      </header>

      <div className="clientes-table-wrap">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c, i) => (
              <tr key={c.id ?? i}>
                <td>{c.nome}</td>
                <td>{c.email}</td>
                <td>{c.telefone || "—"}</td>
                <td>
                  <button
                    type="button"
                    className="btn-excluir"
                    onClick={() => onDeletar(c.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {clientes.length === 0 && (
        <p className="sem-resultados">Nenhum cliente cadastrado.</p>
      )}
    </div>
  );
}

export default Clientes;
