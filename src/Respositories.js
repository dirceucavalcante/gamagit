import React, { useEffect,useState } from "react";
import * as S from './styled';

import Home from './Home';
import {Navigate, useNavigate} from "react-router-dom"


export default function Repositories(){
    const [ repositories, setRepositories ] = useState([]);
    const history = useNavigate();
        useEffect(() =>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        
        if (repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }
        else{
            history('/');
        }
       
    }, []);
    return (
        <S.HomeContainer>
            <S.Title>Repositorios</S.Title>
        <S.Content>
            
            <S.List>
                {repositories.map(repository => {
                    return(
                        <S.ListItem>Repositório: {repository} </S.ListItem>
                    )
                }

                    )}
            </S.List>
           

        </S.Content>
        <S.LinkHome to={'/'}>Voltar </S.LinkHome>
        </S.HomeContainer>


    )
}