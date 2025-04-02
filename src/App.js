
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExRoutePage from './pages/exRoutePage';
import ResumePage from './pages/resumePage';
import SateliteProjectPage from './pages/satelliteProjectPage';
import TameProjectPage from './pages/tameProjectPage';
import UtilitiesProjectPage from './pages/utilitiesProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/exRoute" element={<ExRoutePage />} exact />
        <Route path="/resume" element={<ResumePage />} exact />
        <Route path="/satelliteProject" element={<SateliteProjectPage />} exact />
        <Route path="/tameProject" element={<TameProjectPage />} exact />
        <Route path="/utilitiesProject" element={<UtilitiesProjectPage />} exact />
      </Routes>
    </Router>
  );
};

export default App;
 