import { useEffect, useState } from 'react';
import './Inicio.css';
import { Grid, Stack, Flex, Box, Heading, HStack } from '@chakra-ui/react';
import Carteles from './componentes/carteles';
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
        <Heading>JESUS ES UNA PUTITA</Heading>
        <HStack
          mb="1.2em"
          spacing="0"
          w={{
            base: '20em',
            md: '56em',
            sm: '26em',
          }}
          h={{
            base: '45em',
            md: '380px',
          }}
          overflow="hidden"
          borderRadius="0.4em"
        >
          {semanales.map((manga, index) => (
            <Box className="Slider" key={index}>
              <ContainerSlide proyectos={manga} />
            </Box>
          ))}
        </HStack>
      </Stack>
      <Flex
        className="Seccion2"
        borderColor="red"
        wrap="wrap-reverse"
        gap="2em"
        p="0.5em"
      >
        <Stack spacing="4" w="26em">
          <div className="Discord-Head">
            <Heading size="lg">Nuestro Discord</Heading>
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
        <Stack spacing="4" justify="center" flex="1">
          <div className="TituloSugerencias">
            <Heading size="lg">Nuestros Proyectos:</Heading>
          </div>
          <Grid
            templateColumns={{
              base: 'repeat(auto-fit,minmax(10em,1fr))',
              md: 'repeat(auto-fit,minmax(14em, 1fr))',
              sm: 'repeat(auto-fit,mimax(12em, 1fr))',
            }}
            gap="1em"
          >
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
