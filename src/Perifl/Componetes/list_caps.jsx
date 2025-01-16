import { Link } from 'react-router-dom';
import '../Styles/list_caps.css';
import { Icon } from '@iconify/react';

function Caps(props) {
  let capsList = props.capitulos;
  let nombre = props.nombre;
  if (capsList.length == 0) {
    return (
      <div className="Capitulos">
        <h1>No hay capitulos disponibles</h1>
        <h4>
          Hey no te desanimes este proyecto puede ser recien añadido, o el staff
          esta dando mantenimiento, anda tomate un café y regresa mas tarde
        </h4>
        <p>
          En caso que siga sin aparecer capitulos, comunicate con nosotros en
          nuestro discord.
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
