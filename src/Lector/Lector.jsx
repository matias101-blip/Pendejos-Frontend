import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Canvas from './componentes/canvas';
import './styles/Lector.css';

let Lector = () => {
  const { nombre, cap } = useParams();
  const [Pags, setPags] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8000/api/${nombre}/${cap.replace('.', '-')}`)
      .then((response) => response.json())
      .then((data) => setPags(data))
      .catch((err) => console.error(err));
  }, [nombre, cap]);

  if (!Pags) {
    return <h1>Recibiendo los datos del sv UwU</h1>;
  } else if (!Pags.Succes) {
    return (
      <div className="Lector">
        <h1>
          El capitulo que buscas no esta disponible, con tacte con el admin UnU
        </h1>
      </div>
    );
  } else {
    let caps = JSON.parse(Pags.capitulos);
    return (
      <div className="Lector">
        <div className="Bar">
          <ul>
            <li>
              <Link to="/Inicio">
                <button>
                  <span>Inicio</span>
                </button>
              </Link>
            </li>
            {caps.indexOf(Number(cap)) != 0 && (
              <Link to={`/${nombre}/${caps[caps.indexOf(Number(cap)) - 1]}`}>
                <li>
                  <button>
                    <span>Prev</span>
                  </button>
                </li>
              </Link>
            )}
            <li>
              <Link to={`/${nombre}`}>
                <button>
                  <span>Caps</span>
                </button>
              </Link>
            </li>
            {caps.indexOf(Number(cap)) !=
              caps.indexOf(caps[caps.length - 1]) && (
              <Link to={`/${nombre}/${caps[caps.indexOf(Number(cap)) + 1]}`}>
                <li>
                  <button>
                    <span>Next</span>
                  </button>
                </li>
              </Link>
            )}
          </ul>
        </div>
        <div className="container-L">
          {Pags.Hojas.map((number, index) => (
            <Canvas
              key={`${Pags.name}-${cap}-${index}`}
              hojas={number}
              nombre={Pags.name}
              capitulo={cap}
            />
          ))}
        </div>
      </div>
    );
  }
};
export default Lector;
