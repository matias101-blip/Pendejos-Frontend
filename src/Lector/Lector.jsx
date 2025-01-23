import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Canvas from './componentes/canvas';
import { Box, Heading, Button, HStack, Container } from '@chakra-ui/react';
import { DiscussionEmbed } from 'disqus-react';

let Lector = () => {
  const { nombre, cap } = useParams();
  const [Pags, setPags] = useState(null);
  useEffect(() => {
    fetch(`https://pendejosapi.space/api/${nombre}/${cap.replace('.', '-')}`)
      .then((response) => response.json())
      .then((data) => setPags(data))
      .catch((err) => console.error(err));
    window.scrollTo(0, 0);
  }, [nombre, cap]);

  if (!Pags) {
    return <h1>Recibiendo los datos del sv UwU</h1>;
  } else if (!Pags.Succes) {
    return (
      <Box className="Lector">
        <Heading>
          El capitulo que buscas no esta disponible, con tacte con el admin UnU
        </Heading>
      </Box>
    );
  } else {
    const ConfigDisqus = {
      url: `http://pendejoshub.site/${nombre}/${cap}`,
      identifier: `${nombre}-${cap}`,
      title: `Comentarios de ${nombre}: ${cap}`,
      language: 'es',
    };
    let caps = JSON.parse(Pags.capitulos);
    return (
      <Box className="Lector">
        <Box w="100%" display="flex" justifyContent="center">
          <HStack spacing="6">
            <Link to="/">
              <Button>
                <Icon icon="material-symbols:home-rounded" width="1.4em" />
              </Button>
            </Link>
            {caps.indexOf(Number(cap)) != 0 && (
              <Link to={`/${nombre}/${caps[caps.indexOf(Number(cap)) - 1]}`}>
                <Button>
                  <Icon icon="material-symbols:skip-previous" width="1.4em" />
                </Button>
              </Link>
            )}
            <Link to={`/${nombre}`}>
              <Button>
                <Icon icon="material-symbols:menu-book-sharp" width="1.4em" />
              </Button>
            </Link>
            {caps.indexOf(Number(cap)) !=
              caps.indexOf(caps[caps.length - 1]) && (
              <Link to={`/${nombre}/${caps[caps.indexOf(Number(cap)) + 1]}`}>
                <Button>
                  <span>
                    <Icon icon="material-symbols:skip-next" width="1.4em" />
                  </span>
                </Button>
              </Link>
            )}
          </HStack>
        </Box>
        <Box display="flex" flexDir="column" alignItems="center">
          <Canvas hojas={Pags.Hojas} nombre={Pags.name} capitulo={cap} />
        </Box>
        {/*        <div className="Comentarios">
          <DiscussionEmbed shortname="pendejoshub-site" config={ConfigDisqus} />
        </div>*/}
      </Box>
    );
  }
};
export default Lector;
