import estilo from './perfil.module.css';
import perfil from '../assets/perfil.webp';

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
        <p><strong>Filme favorito:</strong>As Meninas Superpoderosas Detonam!</p>
      </div>
    </div>
  );
}
