import { useEffect } from 'react';
import '../Styles/perfil.css';
import Caps from './list_caps';
function Perfil(props) {
  const { nombre, portada, resumen, folder, generos, capitulos } =
    props.proyecto;
  const fondo = {
    backgroundImage: `https://34.58.10.132url(/img/${portada})`,
    backgroundSize: 'cover',
  };

  useEffect(() => {
    // Cargar el script de Tenor solo cuando el componente esté montado
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente sea desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="container-p">
      <div className="Seccion1-p">
        <img
          src={`http://34.58.10.132/img/${nombre}/${portada.replace('.', '-')}`}
          alt={nombre}
        />
        <div
          className="tenor-gif-embed"
          data-postid="13000968370295317236"
          data-share-method="host"
          data-aspect-ratio="1.29016"
          data-width="100%"
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <a href="https://tenor.com/view/%E3%81%82-gif-13000968370295317236">
            あ Sticker
          </a>
          from{' '}
          <a href="https://tenor.com/search/%E3%81%82-stickers">あ Stickers</a>
        </div>
      </div>
      <div className="Seccion2-p" style={fondo}>
        <div className="Opacity">
          <div className="title">
            <h2>{nombre}</h2>
          </div>
          <div className="info">
            <h4>{resumen}</h4>
          </div>
          <div className="Generos">
            {generos.map((genero, index) => (
              <h3 key={index}>{genero}</h3>
            ))}
          </div>
          <Caps capitulos={capitulos} nombre={nombre}></Caps>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
