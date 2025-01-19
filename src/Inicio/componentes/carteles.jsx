import '../styles/Carteles.css';

import { Link } from 'react-router-dom';
function Carteles(props) {
  const { nombre, portada, resumen } = props.proyectos;
  return (
    <div className="Cartelera">
      <Link to={`/${nombre}`}>
        <div className="Cuerpo">
          <img
            className="portada"
            src={`https://34.58.10.132/img/${nombre}/${portada.replace('.', '-')}`}
            alt={portada}
          />
          <div className="Info">
            <h2 className="titulo">{nombre}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Carteles;
