import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../main";
import Front from "../backend";
import Back from "../backend";

const Rotas = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/front" element={<Front />} />
            <Route exact path="/back" element={<Back />} />
        </Routes>
    </BrowserRouter>

);

export default Rotas;