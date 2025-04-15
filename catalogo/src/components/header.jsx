import estilo from './header.module.css'
import logo from '../assets/logo.png'

//estrutura react para componentes
export function Header(){
    return(
        //para cada return só posso renderizar um unico componente
        <header className={estilo.container}>
            <img src={logo}/> 
        </header>
        
    )
}