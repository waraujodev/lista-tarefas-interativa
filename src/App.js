import React, { useState } from 'react';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, { texto: tarefa, concluida: false }]);
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const marcarConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida).length;
  const tarefasConcluidas = tarefas.length - tarefasPendentes;

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <FormularioTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas 
        tarefas={tarefas} 
        removerTarefa={removerTarefa} 
        marcarConcluida={marcarConcluida} 
      />
      <p>Pendentes: {tarefasPendentes} | Concluídas: {tarefasConcluidas}</p>
    </div>
  );
}

export default App;
