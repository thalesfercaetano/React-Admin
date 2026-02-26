import "./Relatorios.css";

function Relatorios() {
  const cards = [
    { titulo: "Vendas do mês", valor: "R$ 47.285,90", icone: "💰", tendencia: "+12%" },
    { titulo: "Pedidos ativos", valor: "23", icone: "📋", tendencia: "5 novos" },
    { titulo: "Clientes ativos", valor: "156", icone: "👥", tendencia: "+8" },
    { titulo: "Entregas esta semana", valor: "18", icone: "🚚", tendencia: "100%" },
  ];

  const atividades = [
    { acao: "Novo pedido #1247", tempo: "Há 2 min" },
    { acao: "Entrega concluída - Maria Silva", tempo: "Há 15 min" },
    { acao: "Cliente cadastrado - João", tempo: "Há 1 h" },
    { acao: "Produto atualizado - Monitor 27\"", tempo: "Há 2 h" },
    { acao: "Pedido #1245 enviado", tempo: "Há 3 h" },
  ];

  return (
    <div className="page relatorios-page">
      <header className="page-header">
        <h1>Relatórios</h1>
        <p className="page-subtitle">Visão geral do sistema (dados fictícios).</p>
      </header>

      <div className="relatorios-cards">
        {cards.map((card, i) => (
          <div key={i} className="relatorio-card">
            <div className="relatorio-card-icon">{card.icone}</div>
            <div className="relatorio-card-content">
              <p className="relatorio-card-titulo">{card.titulo}</p>
              <p className="relatorio-card-valor">{card.valor}</p>
              <span className="relatorio-card-tendencia">{card.tendencia}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="atividades-section">
        <h2>Atividade recente</h2>
        <ul className="atividades-list">
          {atividades.map((a, i) => (
            <li key={i} className="atividade-item">
              <span className="atividade-acao">{a.acao}</span>
              <span className="atividade-tempo">{a.tempo}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Relatorios;
