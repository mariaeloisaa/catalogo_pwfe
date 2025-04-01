import estilo from './footer.module.css'

export function Footer(){
    return(
        <footer className={estilo.conteiner}>
            <a href="https://github.com/mariaeloisaa/catalogo_pwfe" target="_blank">GitHub</a>
            <p>Desenvolvido por Maria Eloisa Fortunato</p>
        </footer>
    )
}