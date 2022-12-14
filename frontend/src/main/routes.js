import React from "react"

import { Route, Routes, HashRouter } from "react-router-dom"
import FormCard from "../pages/formCard"
import FormsList from "../pages/formsList"
import Login from "../pages/loginCard"

function Rotas(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/formCard" element={<FormCard/>} />
                <Route path="/formsList" element={<FormsList/>} />
            </Routes>
        </HashRouter>
    )
}

export default Rotas
