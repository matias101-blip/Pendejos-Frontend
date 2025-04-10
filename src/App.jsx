import { Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import Perfil_Project from './Perifl/Perfil';
import Lector from './Lector/Lector';
import { Icon } from '@iconify/react';
import { Box, Link as ChaKraLink, Image, Card } from '@chakra-ui/react';
import BoxSlider from './Inicio/componentes/box-slider';


function App() {
  return (

    
    <div className="App">
      <Box
        className="nav-bar"
        w="100%"
        p="1em"
        display="flex"
        justifyContent="space-between"
      >
        <ChaKraLink href="/">
          <Image className="logo" src="/img/logo.png" alt="Logo.png" w="10em" />
        </ChaKraLink>
        <Box>
          <Icon icon="flowbite:user-solid" style={{ fontSize: '2.5em' }} />
        </Box>
      </Box>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/:nombre" element={<Perfil_Project />} />
        <Route path="/:nombre/:cap" element={<Lector />} />
      </Routes>
      <Card
        w="100%"
        h="4em"
        mt="3em"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <h3>PendejosScan 2025</h3>
      </Card>

      <BoxSlider></BoxSlider>
    </div>
  );
}

export default App;
