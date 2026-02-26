import "./Clientes.css";

const CLIENTES_INICIAIS = [
  { id: 1, nome: "Maria Silva", email: "maria@email.com", telefone: "(11) 98765-4321" },
  { id: 2, nome: "João Santos", email: "joao@email.com", telefone: "(21) 91234-5678" },
  { id: 3, nome: "Ana Oliveira", email: "ana@email.com", telefone: "(31) 99876-5432" },
  { id: 4, nome: "Pedro Costa", email: "pedro@email.com", telefone: "(41) 98765-1234" },
  { id: 5, nome: "Carla Mendes", email: "carla@email.com", telefone: "(51) 97654-3210" },
];

function Clientes({ clientesCadastrados = [] }) {
  const todos = [...CLIENTES_INICIAIS, ...clientesCadastrados];

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
            </tr>
          </thead>
          <tbody>
            {todos.map((c, i) => (
              <tr key={c.id ?? i}>
                <td>{c.nome}</td>
                <td>{c.email}</td>
                <td>{c.telefone || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {todos.length === 0 && (
        <p className="sem-resultados">Nenhum cliente cadastrado.</p>
      )}
    </div>
  );
}

export default Clientes;
