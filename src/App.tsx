import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ResourcesPage from './pages/ResourcesPage';
import SolarLanding from './pages/SolarLanding';
import NextStepPage from './pages/NextStepPage';

function App() {
  return (
    <div className="notranslate">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wiedza" element={<ResourcesPage />} />
        <Route path="/ekspert-oze" element={<SolarLanding />} />
        <Route path="/nextstep-web" element={<NextStepPage />} />
      </Routes>
    </div>
  );
}

export default App;
