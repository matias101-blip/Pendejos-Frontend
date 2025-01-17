import { Link } from 'react-router-dom';
import '../Styles/list_caps.css';
import { Icon } from '@iconify/react';

function Caps(props) {
  let capsList = props.capitulos;
  let nombre = props.nombre;
  if (capsList.length == 0) {
    return (
      <div className="Capitulos">
        <h1>No hay capítulos disponibles</h1>
        <h4>
          ¡Hey! No te desanimes, este proyecto puede ser recién añadido o el
          staff está dando mantenimiento. Anda, tómate un café y regresa más
          tarde.
        </h4>
        <p>
          En caso de que los capítulos sigan sin aparecer, comunícate con
          nosotros en nuestro Discord.
        </p>
      </div>
    );
  }
  return (
    <div className="Capitulos">
      {capsList.map((cap, index) => (
        <Link to={`/${nombre}/${cap}`}>
          <div className="item" key={index}>
            <h3 className="titleItem">{`Capitulo ${cap}`}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Caps;
