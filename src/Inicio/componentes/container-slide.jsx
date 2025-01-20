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
      className="Slider"
      w="fit-content"
      h="auto"
      overflow="hidden"
      flexShrink="0"
      bgImage={`url(https://pendejosapi.space/img/${EncodeName}/${portada})`}
    >
      <HStack
        justifyContent="space-around"
        w="auto"
        h="auto"
        wrap="wrap"
        bg="rgba(29, 29, 29, 0.70)"
      >
        <Container w="240px" h="320px" alignContent="center">
          <Image
            w="100%"
            h="auto"
            src={`https://pendejosapi.space/img/${nombre}/${portada}`}
            alt=""
          />
        </Container>
        <Stack p="1em" gap="4" w="40.5em" h="22.6em" justify="center">
          <Heading size="md">{nombre}</Heading>
          <Text overflowY="auto">{resumen}</Text>
        </Stack>
      </HStack>
    </Box>
  );
}

export default ContainerSlide;
