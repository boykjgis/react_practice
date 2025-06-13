// General React Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page Imports
import LeafletMap from './pages/LeafletMap';
import HomePage from './pages/HomePage';

// Component Imports
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Map" element={<LeafletMap/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;