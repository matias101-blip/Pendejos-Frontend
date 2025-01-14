import { Link } from 'react-router-dom';
import '../Styles/list_caps.css';
import { Icon } from '@iconify/react';

function Caps(props) {
  let capsList = props.capitulos;
  let nombre = props.nombre;
  return (
    <div className="Capitulos">
      {capsList.map((cap, index) => (
        <Link to={`/${nombre}/${cap}`}>
          <div className="item" key={index}>
            <h3 className="titleItem">{`Capitulo ${cap}`}</h3>
            <h3>publicado 12-13-2023</h3>
            <Icon icon='akar-icons:eye'style={{fontSize:"2em"}}/>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Caps;
