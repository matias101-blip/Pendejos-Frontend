import '../styles/container-slide.css';
import {
  Box,
  Text,
  Heading,
  Image,
  HStack,
  Container,
  Stack,
} from '@chakra-ui/react';
function ContainerSlide(props) {
  const { nombre, portada, resumen } = props.proyectos;
  var encode = encodeURIComponent(nombre);

  return (
    <Box className="Slider">
      <HStack
        className="container-opacity"
        wrap="wrap"
        bgImage={`url(https://pendejosapi.space/img/${encode}/${portada})`}
      >
        <Image
          w="14em"
          src={`https://pendejosapi.space/img/${nombre}/${portada}`}
          alt=""
        />
        <Stack className="info-slide" p="1em" gap="4">
          <Heading size="md">{nombre}</Heading>
          <Text overflowY="auto">{resumen}</Text>
        </Stack>
      </HStack>
    </Box>
  );
}

export default ContainerSlide;
