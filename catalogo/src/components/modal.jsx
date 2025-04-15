import estilo from './modal.module.css';

export function Modal({movie, onClose}){
    return(
        <div className={estilo.modalback}>
            <div className={estilo.modalConteiner}>
                <h2>{movie.title}</h2>
                <button onClick={onClose}>x</button>

                <img className={estilo.imgDetalhes} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`imagem do filme ${movie.title}`}/>
                <p>{`Popularidade: ${movie.popularity}`}</p>
                <p>{`Data Lançamento: ${movie.release_date}`}</p>
                <p>{`Quantidade de votos: ${movie.vote_count}`}</p>
                <p>{`Sinopse: ${movie.overview}`}</p>
                
            </div>
        </div>
    )
}