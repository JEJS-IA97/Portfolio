import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeV3 from './pages/HomeV3';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomeV3 />} />
          <Route path="/v3" element={<HomeV3 />} />
          <Route path="/v1" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
