import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ResourcesPage from './pages/ResourcesPage';
import SolarLanding from './pages/SolarLanding';
import KeeptLanding from './pages/KeeptLanding';
import KeeptPrivacy from './pages/KeeptPrivacy';



const ExternalRedirect = () => {
  window.location.href = "/nextstep-web/index.html";
  return null;
};

function App() {
  return (
    <div className="notranslate">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wiedza" element={<ResourcesPage />} />

        <Route path="/ekspert-oze" element={<SolarLanding />} />
        <Route path="/keept" element={<KeeptLanding />} />
        <Route path="/keept-privacy" element={<KeeptPrivacy />} />
        <Route path="/nextstep-web" element={<ExternalRedirect />} />

      </Routes>
    </div>
  );
}

export default App;
