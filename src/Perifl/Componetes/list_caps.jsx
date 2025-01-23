import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {
  Box,
  Heading,
  Text,
  Stack,
  List,
  ListIcon,
  ListItem,
  Divider,
  Highlight,
} from '@chakra-ui/react';
function Caps(props) {
  let capsList = props.capitulos;
  let nombre = props.nombre;
  if (capsList.length == 0) {
    return (
      <Box>
        <Stack spacing="2">
          <Heading size="md">No hay capítulos disponibles</Heading>
          <Text maxW="45em">
            ¡Hey! No te desanimes, este proyecto puede ser recién añadido o el
            staff está dando mantenimiento. Anda, tómate un café y regresa más
            tarde.
          </Text>

          <Text>
            <Highlight
              query="Discord"
              styles={{
                bg: 'blue',
                rounded: 'full',
                px: '0.5em',
                color: 'white',
              }}
            >
              En caso de que los capítulos sigan sin aparecer, comunícate con
              nosotros en nuestro Discord
            </Highlight>
          </Text>
        </Stack>
      </Box>
    );
  }
  return (
    <List>
      {capsList.map((cap, index) => (
        <Box>
          <Divider />
          <Link to={`/${nombre}/${cap}`}>
            <ListItem
              key={index}
              display="flex"
              h="4em"
              p="1em"
              alignItems="center"
            >
              <Heading
                size="md"
                className="titleItem"
              >{`Capitulo ${cap}`}</Heading>
            </ListItem>
          </Link>
        </Box>
      ))}
    </List>
  );
}

export default Caps;
