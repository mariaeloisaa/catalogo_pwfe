import estilo from './favoritos.module.css'
import { ListaFav } from '../components/listafav'

export function Favoritos(){
    return(

        <div className={estilo.conteiner}>
            <h2>Favoritos</h2>
            <ListaFav/>
        </div>
    )
}