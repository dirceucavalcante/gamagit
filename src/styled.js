import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
    width: 100vw;
    
    display: flex;
    align-itens: center;
    justify-content: center;
    `;
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    height: 100vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
    `;
export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    `;

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    `;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: white;
    padding: .5rem 0;
    text-decoration: none;
    `;

export const Button = styled.button`
    
    height: 1.5rem;
    border: 1px solid #000;
    background: black;
    border-radius: 0 .25 rem 0 .25rem;
    color: white;

    &:focus,
    &active {
        outline: none;
        box-shadow: none;
    }
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;

    &:focus,
    &active {
        outline: none;
        box-shadow: none;
    }
`;

export const MessageError = styled.span`
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
`;