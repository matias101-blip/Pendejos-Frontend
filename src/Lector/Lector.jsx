import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Canvas from './componentes/canvas';
import { DiscussionEmbed } from 'disqus-react';
import './styles/Lector.css';

let Lector = () => {
  const { nombre, cap } = useParams();
  const [Pags, setPags] = useState(null);
  useEffect(() => {
    fetch(`http://34.58.10.132/api/${nombre}/${cap.replace('.', '-')}`)
      .then((response) => response.json())
      .then((data) => setPags(data))
      .catch((err) => console.error(err));
    window.scrollTo(0, 0);
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
    const ConfigDisqus = {
      url: `http://pendejoshub.site/${nombre}/${cap}`,
      identifier: `${nombre}-${cap}`,
      title: `Comentarios de ${nombre}: ${cap}`,
      language: 'es',
    };
    let caps = JSON.parse(Pags.capitulos);
    return (
      <div className="Lector">
        <div className="Bar">
          <ul>
            <li>
              <Link to="/Inicio">
                <button>
                  <span>
                    <Icon icon="material-symbols:home-rounded" width="1.4em" />
                  </span>
                </button>
              </Link>
            </li>
            {caps.indexOf(Number(cap)) != 0 && (
              <Link to={`/${nombre}/${caps[caps.indexOf(Number(cap)) - 1]}`}>
                <li>
                  <button>
                    <span>
                      <Icon
                        icon="material-symbols:skip-previous"
                        width="1.4em"
                      />
                    </span>
                  </button>
                </li>
              </Link>
            )}
            <li>
              <Link to={`/${nombre}`}>
                <button>
                  <span>
                    <Icon
                      icon="material-symbols:menu-book-sharp"
                      width="1.4em"
                    />
                  </span>
                </button>
              </Link>
            </li>
            {caps.indexOf(Number(cap)) !=
              caps.indexOf(caps[caps.length - 1]) && (
              <Link to={`/${nombre}/${caps[caps.indexOf(Number(cap)) + 1]}`}>
                <li>
                  <button>
                    <span>
                      <Icon icon="material-symbols:skip-next" width="1.4em" />
                    </span>
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
        <div className="Comentarios">
          <DiscussionEmbed shortname="pendejoshub-site" config={ConfigDisqus} />
        </div>
      </div>
    );
  }
};
export default Lector;
