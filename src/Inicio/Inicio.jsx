import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Grid,
  GridItem,
  Stack,
  Flex,
  Box,
  Wrap,
  WrapItem,
  Heading,
  Container,
  HStack,
} from '@chakra-ui/react';
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
    <Box className="container">
      <Stack className="Seccion1" spacing="8" align="center">
        <Heading>Lo nuevo de la Semana:</Heading>
        <HStack w="56.5em" h="380px" overflow="hidden" justify="center">
          {semanales.map((manga, index) => (
            <ContainerSlide key={index} proyectos={manga} />
          ))}
        </HStack>
      </Stack>
      <Flex
        className="Seccion2"
        borderColor="red"
        wrap="wrap-revert"
        gap="2em"
        p="0.5em"
      >
        <Stack spacing="4" w="26em">
          <div className="Discord-Head">
            <Heading size="md">Nuestro Discord</Heading>
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
        </Stack>
        <Stack spacing="4">
          <div className="TituloSugerencias">
            <Heading size="md">Nuestros Proyectos:</Heading>
          </div>
          <Grid templateColumns="repeat(auto-fit,minmax(12em,1fr))" gap="1em">
            {proyectos.map((manga, index) => (
              <Carteles key={index} proyectos={manga} />
            ))}
          </Grid>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Inicio;
