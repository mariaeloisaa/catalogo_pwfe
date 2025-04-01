import estilo from './header.module.css'

//estrutura react para componentes
export function Header(){
    return(
        //para cada return só posso renderizar um unico componente
        <header className={estilo.container}>
            <h1>Hello World</h1>
            <img class="gif" src="../midia/gif_meninas.gif" alt="gif meninas super poderosas"/> 
        </header>
        
    )
}