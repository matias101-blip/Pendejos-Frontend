import './App.css';
import './normalize.css';
import { Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio/Inicio';
import Perfil_Project from './Perifl/Perfil';
import Lector from './Lector/Lector';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/Inicio">
          <img className="logo" src="/img/logo.png" alt="Logo.png" />
        </Link>
        <Link to="/Biblioteca">
          <h4 className="Biblioteca">Biblioteca</h4>
        </Link>
      </nav>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/:nombre" element={<Perfil_Project />} />
        <Route path="/:nombre/:cap" element={<Lector />} />
      </Routes>
    </div>
  );
}

export default App;
