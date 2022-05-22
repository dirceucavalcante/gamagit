
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'

function App(props) {
  const [  usuario, setUsuario ] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }

  return (
    <>
    <h1>Reppsitório GitHub</h1>
    <input value={usuario} className="usuarioInput" placeholder="Digite o nome do usuário" onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa} >Pesquisar</button>
    </>
  );
}

export default App;
