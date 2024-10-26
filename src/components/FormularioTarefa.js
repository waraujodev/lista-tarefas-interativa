import React, { useState } from 'react';

function FormularioTarefa({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={novaTarefa} 
        onChange={(e) => setNovaTarefa(e.target.value)} 
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;
