import { useEffect, useState } from 'react';
import {
  Grid,
  Stack,
  Flex,
  Box,
  Heading,
  HStack,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Carteles from './componentes/carteles';
import ContainerSlide from './componentes/container-slide';
import semanales from './semanal.json';
import './Inicio.css';

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

function Inicio() {
  const [proyectos, setProyectos] = useState([]);
  const bg = useColorModeValue('gray.50', 'gray.900');

  useEffect(() => {
    fetch('https://pendejosapi.space/proyectos')
      .then((response) => response.json())
      .then((data) => setProyectos(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <Box className="container" bg={bg} px={4} py={6}>
      <MotionStack
        className="Seccion1"
        spacing={10}
        align="center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Heading size="xl" textAlign="center">
          Lo más popular:
        </Heading>
        <HStack
          spacing={4}
          w={{ base: '90%', md: '80%' }}
          h={{ base: 'auto', md: '380px' }}
          overflow="hidden"
          borderRadius="xl"
        >
          {semanales.map((manga, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="Slider"
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
            >
              <ContainerSlide proyectos={manga} />
            </MotionBox>
          ))}
        </HStack>
      </MotionStack>

      <Flex
        className="Seccion2"
        wrap="wrap"
        mt={10}
        gap="2em"
        justify="center"
        align="flex-start"
      >
        <MotionStack
          spacing={5}
          w={{ base: '100%', md: '25em' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Heading size="lg">Nuestro Discord</Heading>
          <Box>
            <iframe
              src="https://discord.com/widget?id=1027006600625541240&theme=dark"
              width="100%"
              height="500"
              allowTransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              style={{ borderRadius: '0.5em' }}
            ></iframe>
          </Box>
          <Text textAlign="center">
            Únete a nosotros y dime que este sitio está bugueado :v para poder solucionarlo.
          </Text>
        </MotionStack>

        <MotionStack
          spacing={6}
          flex="1"
          minW="20em"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Heading size="lg">Nuestros Proyectos:</Heading>
          <Grid
            templateColumns="repeat(auto-fit, minmax(13em, 1fr))"
            gap={6}
          >
            {proyectos.map((manga, index) => (
              <MotionBox
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                borderRadius="lg"
                boxShadow="md"
              >
                <Carteles proyectos={manga} />
              </MotionBox>
            ))}
          </Grid>
        </MotionStack>
      </Flex>
    </Box>
  );
}

export default Inicio;

