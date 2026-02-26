function Lista({ tarefas, concluirTarefa }) {
  return (
    <ul className="lista">
      {tarefas.map(t => (
        <li key={t.id} className={t.feita ? "feita" : ""}>
          {t.texto}
          <button onClick={() => concluirTarefa(t.id)}>
            {t.feita ? "↩" : "✔"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Lista;
