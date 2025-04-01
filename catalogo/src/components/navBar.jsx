import estilo from './navBar.module.css'

export function NavBar(){
    //eu so posso retornar 1 componente
    return(
        // se vc colocar mais de um elemento separado, da ruim, pra isso existem as tags fantasmas
        <>
            <nav className={estilo.conteiner}>
                <ul>
                    <li>HOME</li>
                    <li>FILMES</li>
                    <li>PERFIL</li>
                </ul>
            </nav>
        </>
    )
}