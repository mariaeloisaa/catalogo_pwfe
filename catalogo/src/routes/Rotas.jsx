import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Lista } from "../components/lista";
import { Perfil } from "../pages/perfil";
import { Favoritos } from "../pages/favoritos";

export function Rotas(){
    return(
    <Routes>
        <Route path ='/' element={<Home/>}>
            <Route index element={<Lista/>}/>
            <Route path ='perfil' element={<Perfil/>}/>
            <Route path ='favoritos' element={<Favoritos/>}/>
        </Route>
    </Routes>
    )
}

