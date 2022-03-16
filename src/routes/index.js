import React from 'react';
import { BrowserRouter, Routes , Route  } from 'react-router-dom';

import Funcionarios from '../views/Funcionarios';
import Home from '../views/Home';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/funcionarios" element={<Funcionarios />} />
            </Routes>
        </BrowserRouter>
    )
}