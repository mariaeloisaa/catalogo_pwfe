import estilo from './perfil.module.css';
import perfil from '../assets/perfil.webp';
import filme1 from '../assets/filme1.webp';
import filme2 from '../assets/filme2.webp';
import filme3 from '../assets/filme3.jpg'

export function Perfil() {
  return (
    <div className={estilo.container}>
      <div className={estilo.sidebar}>
        <img className={estilo.foto} src={perfil} alt="Foto de perfil" />
        <div className={estilo.botoes}>
          <button>Editar</button>
          <button>Sair</button>
        </div>
      </div>
      
      <div className={estilo.info}>
        <h2>Maria Eloisa Fortunato</h2>
        <p><strong>Email:</strong>mariaeloisa@email.com</p>
        <p><strong>Desde:</strong>Janeiro de 2024</p>
        <p><strong>Filmes favoritos:</strong></p>
        <div className={estilo.filmes}>
        <img src={filme1}/>
        <img src={filme2}/>
        <img src={filme3}/>
        </div>
      </div>
    </div>
  );
}
