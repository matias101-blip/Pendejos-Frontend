import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  LinkOverlay,
  Heading,
} from '@chakra-ui/react';
function Carteles(props) {
  const { nombre, portada, resumen } = props.proyectos;
  return (
    <Card>
      <LinkOverlay href={`/${nombre}/`}>
        <CardHeader className="Cuerpo">
          <Image
            w="100%"
            className="portada"
            src={`https://pendejosapi.space/img/${nombre}/${portada.replace('.', '-')}`}
            alt={portada}
          />
        </CardHeader>
        <CardBody align="center" justify="end">
          <Heading size="md">{nombre}</Heading>
        </CardBody>
      </LinkOverlay>
    </Card>
  );
}

export default Carteles;
