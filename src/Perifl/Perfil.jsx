import { useParams } from 'react-router-dom';
import './style.css';
import Perfil from './Componetes/Perfil';
import { useEffect, useState } from 'react';

function Perfil_Project() {
  let { nombre } = useParams();
  const [Proyecto, setProyecto] = useState(null);
  useEffect(() => {
    fetch(`http://34.58.10.132/proyectos/${nombre}`)
      .then((response) => response.json())
      .then((data) => setProyecto(data))
      .catch((err) => console.log(err));
  }, [nombre]);
  return (
    <div className="container_perfil">
      {Proyecto ? (
        <Perfil proyecto={Proyecto} />
      ) : (
        <p>Cargando...</p> // Mientras los datos se cargan, mostramos un mensaje
      )}
    </div>
  );
}

export default Perfil_Project;
