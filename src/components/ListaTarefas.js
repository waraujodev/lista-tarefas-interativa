import React from 'react';
import Tarefa from './Tarefa';

function ListaTarefas({ tarefas, removerTarefa, marcarConcluida }) {
  return (
    <div>
      {tarefas.map((tarefa, index) => (
        <Tarefa 
          key={index} 
          tarefa={tarefa} 
          index={index} 
          removerTarefa={removerTarefa} 
          marcarConcluida={marcarConcluida} 
        />
      ))}
    </div>
  );
}

export default ListaTarefas;
