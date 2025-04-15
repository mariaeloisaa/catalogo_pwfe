import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Lista } from "../components/lista";
import { Perfil } from "../pages/perfil";
import { Series } from "../pages/series";

export function Rotas(){
    return(
    <Routes>
        <Route path ='/' element={<Home/>}>
            <Route index element={<Lista/>}/>
            <Route path ='perfil' element={<Perfil/>}/>
            <Route path ='serie' element={<Series/>}/>
        </Route>
    </Routes>
    )
}

