import estilo from './navBar.module.css';
import { Link } from 'react-router-dom';

export function NavBar(){
    //eu so posso retornar 1 componente
    return(
        // se vc colocar mais de um elemento separado, da ruim, pra isso existem as tags fantasmas
        <>
            <nav className={estilo.conteiner}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="serie"><li>Series</li></Link>
                    <Link to="perfil"><li>Perfil</li></Link>
                </ul>
            </nav>
        </>
    )
}