import '../styles/container-slide.css';
import {
  Box,
  Text,
  Heading,
  Image,
  HStack,
  Container,
  Stack,
  Flex,
} from '@chakra-ui/react';
function ContainerSlide(props) {
  const { nombre, portada, resumen } = props.proyectos;
  var EncodeName = encodeURIComponent(nombre);
  return (
    <Box
      className="container-slide"
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
      flexShrink="0"
      bgImage={`url(https://pendejosapi.space/img/${EncodeName}/${portada})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
    >
      <HStack
        justifyContent="space-around"
        w="100%"
        h="100%"
        wrap="wrap"
        bg="rgba(29, 29, 29, 0.85)"
      >
        <Container w="240px" h="320px" alignContent="center">
          <Image
            w="100%"
            h="auto"
            src={`https://pendejosapi.space/img/${nombre}/${portada}`}
            alt=""
            borderRadius="0.5em"
          />
        </Container>
        <Stack p="1em" gap="4" w="40.5em" h="22.6em" justify="center">
          <Heading size="lg">{nombre}</Heading>
          <Text overflowY="auto">{resumen}</Text>
        </Stack>
      </HStack>
    </Box>
  );
}

export default ContainerSlide;
