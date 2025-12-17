import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ResourcesPage from './pages/ResourcesPage';
import SolarLanding from './pages/SolarLanding';

function App() {
  return (
    <div className="notranslate">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wiedza" element={<ResourcesPage />} />
        <Route path="/ekspert-oze" element={<SolarLanding />} />
      </Routes>
    </div>
  );
}

export default App;
