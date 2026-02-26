import { useState } from "react";

function InputTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState("");

  function enviar() {
    if (texto.trim() === "") return;
    adicionarTarefa(texto);
    setTexto("");
  }

  return (
    <div className="input-area">
      <input
        placeholder="Digite uma tarefa"
        value={texto}
        onChange={e => setTexto(e.target.value)}
      />
      <button onClick={enviar}>Adicionar</button>
    </div>
  );
}

export default InputTarefa;
