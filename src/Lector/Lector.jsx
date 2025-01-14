import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Canvas from './componentes/canvas';
import ToolBar from './componentes/bar';
import './styles/Lector.css';

let Lector = () => {
  const [Pags, setPags] = useState(null);
  let { nombre, cap } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/api/${nombre}/${cap}`)
      .then((response) => response.json())
      .then((data) => setPags(data))
      .catch((err) => console.error(err));
    console.log(Pags);
  }, [cap]);

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
    return (
      <div className="Lector">
        <ToolBar caps={[1]}></ToolBar>
        <div className="container-L">
          {Pags.Hojas.map((number, index) => (
            <Canvas
              key={index}
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
