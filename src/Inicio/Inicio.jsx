import './Inicio.css';
import { useEffect, useState } from 'react';
import Carteles from './componentes/carteles';
import Noticias from './componentes/New';
import ContainerSlide from './componentes/container-slide';
import semanales from './semanal.json';

function Inicio() {
  const [proyectos, setProyectos] = useState([]);
  useEffect(() => {
    fetch('https://pendejosapi.space/proyectos')
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
        <div className="Discord">
          <div className="Discord-Head">
            <h2>Nuestro Discord</h2>
          </div>
          <div className="Discord-Body">
            <iframe
              src="https://discord.com/widget?id=1027006600625541240&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
          <div className="Discord-Foot">
            <p>
              Únete a nosotros y dime que este sitio está bugueado :v para poder
              solucionarlo.
            </p>
          </div>
        </div>
        <div className="sugerencias:">
          <div className="TituloSugerencias">
            <h2>Nuestros Proyectos:</h2>
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
