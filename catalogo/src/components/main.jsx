import estilo from './main.module.css'
import { Lista } from './lista'

export function Main(){
    return(
        <main className={estilo.conteiner}>
            <Lista/>
        </main>
    )
}