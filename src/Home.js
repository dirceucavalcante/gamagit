
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

export default function App(props) {
  const history = useNavigate();
  const [  usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      
     repositories.map((repositories) => {
       repositoriesName.push(repositories.name)
        });
     localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
     setErro(false);
     history('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Title>Repositório GitHub</S.Title>
      <S.Content>
        <S.Input value={usuario} className="usuarioInput" placeholder="Digite o nome do usuário" onChange={e => setUsuario(e.target.value)}/>
        <S.Button onClick={handlePesquisa}>Pesquisar</S.Button>
       
      </S.Content>
      { erro ? <S.MessageError>Usuário não encontrado!</S.MessageError> : '' }
    </S.HomeContainer>
  );
}


