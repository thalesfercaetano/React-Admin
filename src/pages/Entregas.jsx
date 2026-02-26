import "./Entregas.css";

const ENTREGAS_FICTICIAS = [
  { id: 1, cliente: "Maria Silva", endereco: "Rua das Flores, 123 - São Paulo, SP", data: "14/02/2025", status: "Entregue", valor: 4299.9 },
  { id: 2, cliente: "João Santos", endereco: "Av. Brasil, 456 - Rio de Janeiro, RJ", data: "13/02/2025", status: "Entregue", valor: 538.9 },
  { id: 3, cliente: "Ana Oliveira", endereco: "Rua Minas, 789 - Belo Horizonte, MG", data: "12/02/2025", status: "Entregue", valor: 1899.0 },
  { id: 4, cliente: "Pedro Costa", endereco: "Rua Paraná, 321 - Curitiba, PR", data: "11/02/2025", status: "Entregue", valor: 349.0 },
  { id: 5, cliente: "Carla Mendes", endereco: "Av. Assis Brasil, 1000 - Porto Alegre, RS", data: "10/02/2025", status: "Entregue", valor: 199.0 },
];

function Entregas() {
  function formatarPreco(val) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);
  }

  return (
    <div className="page entregas-page">
      <header className="page-header">
        <h1>Entregas Feitas</h1>
        <p className="page-subtitle">Histórico de entregas concluídas.</p>
      </header>

      <div className="entregas-list">
        {ENTREGAS_FICTICIAS.map((e) => (
          <article key={e.id} className="entrega-card">
            <div className="entrega-header">
              <span className="entrega-id"># {e.id}</span>
              <span className="entrega-status">{e.status}</span>
            </div>
            <p className="entrega-cliente">{e.cliente}</p>
            <p className="entrega-endereco">{e.endereco}</p>
            <div className="entrega-footer">
              <span className="entrega-data">📅 {e.data}</span>
              <span className="entrega-valor">{formatarPreco(e.valor)}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Entregas;
