
import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [  usuario, setUsuario ] = useState('');

  function handlePesquisa(){
    
  }

  return (
    <>
    <h1>{props.title}</h1>
    <input value={usuario} className="usuarioInput" placeholder="Digite o nome do usuário" onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa} >Pesquisar</button>
    </>
  );
}

export default App;
