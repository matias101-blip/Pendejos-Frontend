import { useEffect } from 'react';
import Caps from './list_caps';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  HStack,
  Stack,
  Image,
  Text,
  Heading,
  Container,
  Tag,
} from '@chakra-ui/react';
function Perfil(props) {
  const { nombre, portada, resumen, folder, generos, capitulos } =
    props.proyecto;
  const fondo = {
    backgroundImage: `url(https://pendejosapi.space/img/${portada})`,
    backgroundSize: 'cover',
  };

  useEffect(() => {
    // Cargar el script de Tenor solo cuando el componente esté montado
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    // Limpiar el script cuando el componente sea desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  var encode = encodeURIComponent(nombre);
  return (
    <Card
      h={{
        base: 'auto',
      }}
    >
      <Flex wrap="wrap" gap="4">
        <Container
          mt={{
            base: '2em',
            md: '1em',
          }}
          ml={{
            base: 'auto',
            md: '1em',
          }}
          w={{
            base: '14em',
            md: '15em',
          }}
          h={{
            base: '20em',
            md: '21em',
          }}
          borderRadius="0.5em"
          backgroundImage={`url(https://pendejosapi.space/img/${encode}/${portada.replace('.', '-')})`}
          backgroundSize="cover"
          backgroundPosition="center"
        ></Container>
        <CardBody w="30em">
          <Stack>
            <Heading overflow="hidden">{nombre}</Heading>
            <Text>{resumen}</Text>
            <HStack wrap="wrap" maxW="40em">
              {generos.map((genero, index) => (
                <Tag size="lg" colorScheme="orange" key={index}>
                  {genero}
                </Tag>
              ))}
            </HStack>
            <Box
              w={{
                base: 'base',
                md: 'auto',
              }}
              h="12.2em"
              overflowY="auto"
            >
              <Caps capitulos={capitulos} nombre={nombre}></Caps>
            </Box>
          </Stack>
        </CardBody>
      </Flex>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default Perfil;
