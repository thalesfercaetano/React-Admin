import "./Layout.css";

const MENU_ITEMS = [
  { id: "home", label: "Início", icon: "📋" },
  { id: "cadastro", label: "Cadastro", icon: "✏️" },
  { id: "produtos", label: "Produtos", icon: "📦" },
  { id: "clientes", label: "Clientes", icon: "👥" },
  { id: "entregas", label: "Entregas Feitas", icon: "🚚" },
  { id: "relatorios", label: "Relatórios", icon: "📊" },
];

function Layout({ paginaAtual, setPaginaAtual, usuario, onSair, children }) {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo">⚙️ Admin</span>
          <span className="user-badge">{usuario}</span>
        </div>
        <nav className="sidebar-nav">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${paginaAtual === item.id ? "active" : ""}`}
              onClick={() => setPaginaAtual(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <button className="nav-item sair-btn" onClick={onSair}>
          <span className="nav-icon">🚪</span>
          <span>Sair</span>
        </button>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}

export default Layout;
