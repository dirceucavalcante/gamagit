import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repositories from './Respositories';
import Home from './Home';

export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />;
                <Route path="/repositories" element={<Repositories/>} />;
            </Routes>
        </BrowserRouter>
    )
}