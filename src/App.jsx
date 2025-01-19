import './App.css';
import './normalize.css';
import { Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import Perfil_Project from './Perifl/Perfil';
import Lector from './Lector/Lector';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar" style={{ marginBottom: '1em' }}>
        <Link to="/">
          <img className="logo" src="/img/logo.png" alt="Logo.png" />
        </Link>
      </nav>
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
