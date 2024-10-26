import React from "react";

function Tarefa({ tarefa, index, removerTarefa, marcarConcluida }) {
  return (
    <li className={tarefa.concluida ? "completed" : ""}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => marcarConcluida(index)}
      />
      {tarefa.texto}
      <button onClick={() => removerTarefa(index)}>Remover</button>
    </li>
  );
}

export default Tarefa;
