import './Inicio.css';
import { useEffect, useState } from 'react';
import Carteles from './componentes/carteles';
import Noticias from './componentes/New';
import ContainerSlide from './componentes/container-slide';
import semanales from './semanal.json';

function Inicio() {
  const [proyectos, setProyectos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/proyectos')
      .then((response) => response.json())
      .then((data) => setProyectos(data))
      .catch((error) => console.error('Error:', error));
    console.log(proyectos);
  }, []);
  return (
    <div className="container">
      <div className="Seccion1">
        <h2>Lo nuevo de la Semana:</h2>
        <div className="SlideSeccion1">
          {semanales.map((manga, index) => (
            <ContainerSlide key={index} proyectos={manga} />
          ))}
        </div>
      </div>
      <div className="Seccion2">
        <div className="sugerencias:">
          <div className="TituloSugerencias">
            <h2>Sugerencias:</h2>
          </div>
          <div className="cartelera">
            {proyectos.map((manga, index) => (
              <Carteles key={index} proyectos={manga} />
            ))}
          </div>
        </div>
      </div>
      <div className="Seccion3"></div>
    </div>
  );
}

export default Inicio;
