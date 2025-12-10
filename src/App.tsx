import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <div className="notranslate">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wiedza" element={<ResourcesPage />} />
      </Routes>
    </div>
  );
}

export default App;
