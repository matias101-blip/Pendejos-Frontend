import './normalize.css';
import { Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import Perfil_Project from './Perifl/Perfil';
import Lector from './Lector/Lector';
import { Icon } from '@iconify/react';
import { Box, Link as ChaKraLink, Image } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <Box className="nav-bar" w="10em" p="1em" mb="3em">
        <ChaKraLink href="/">
          <Image className="logo" src="/img/logo.png" alt="Logo.png" />
        </ChaKraLink>
      </Box>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/:nombre" element={<Perfil_Project />} />
        <Route path="/:nombre/:cap" element={<Lector />} />
      </Routes>
      <foot>
        <h3>PendejosScan 2025</h3>
      </foot>
    </div>
  );
}

export default App;
