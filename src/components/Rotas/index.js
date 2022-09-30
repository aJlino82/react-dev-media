import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../main";
import Front from "../frontend";
import Back from "../backend";

const Rotas = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route  path="/frontend" element={<Front />} />
            <Route  path="/backend" element={<Back />} />
        </Routes>
    </BrowserRouter>

);

export default Rotas;