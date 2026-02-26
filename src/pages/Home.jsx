import { useState } from "react";
import Lista from "../Lista";
import InputTarefa from "../InputTarefa";
import "./Home.css";

function Home() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Revisar pedidos pendentes", feita: false },
    { id: 2, texto: "Confirmar entregas do dia", feita: true },
    { id: 3, texto: "Atualizar estoque de produtos", feita: false },
    { id: 4, texto: "Responder solicitações de clientes", feita: false },
  ]);
  const [filtro, setFiltro] = useState("todas");

  function adicionarTarefa(texto) {
    setTarefas([...tarefas, { id: Date.now(), texto, feita: false }]);
  }

  function concluirTarefa(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t))
    );
  }

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "feitas") return t.feita;
    if (filtro === "pendentes") return !t.feita;
    return true;
  });

  const pendentes = tarefas.filter((t) => !t.feita).length;

  return (
    <div className="page home-page">
      <header className="page-header">
        <h1>Painel Inicial</h1>
        <p className="page-subtitle">
          {pendentes} tarefa{pendentes !== 1 ? "s" : ""} pendente
          {pendentes !== 1 ? "s" : ""}
        </p>
      </header>

      <section className="tasks-section">
        <div className="tasks-toolbar">
          <div className="filter-buttons">
            <button
              className={filtro === "todas" ? "active" : ""}
              onClick={() => setFiltro("todas")}
            >
              Todas
            </button>
            <button
              className={filtro === "pendentes" ? "active" : ""}
              onClick={() => setFiltro("pendentes")}
            >
              Pendentes
            </button>
            <button
              className={filtro === "feitas" ? "active" : ""}
              onClick={() => setFiltro("feitas")}
            >
              Concluídas
            </button>
          </div>
        </div>
        <InputTarefa adicionarTarefa={adicionarTarefa} />
        <Lista tarefas={tarefasFiltradas} concluirTarefa={concluirTarefa} />
      </section>
    </div>
  );
}

export default Home;
