import { useParams } from 'react-router-dom';
import './style.css';
import Perfil from './Componetes/Perfil';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
function Perfil_Project() {
  let { nombre } = useParams();
  const [Proyecto, setProyecto] = useState(null);
  useEffect(() => {
    fetch(`https://pendejosapi.space/proyectos/${nombre}`)
      .then((response) => response.json())
      .then((data) => setProyecto(data))
      .catch((err) => console.log(err));
  }, [nombre]);
  return (
    <Box
      pl={{
        base: '1em',
        md: '4em',
      }}
      pr={{
        base: '1em',
        md: '4em',
      }}
    >
      {Proyecto ? (
        <Perfil proyecto={Proyecto} />
      ) : (
        <p>Cargando...</p> // Mientras los datos se cargan, mostramos un mensaje
      )}
    </Box>
  );
}

export default Perfil_Project;
