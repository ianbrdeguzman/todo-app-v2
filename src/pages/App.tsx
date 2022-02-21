import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Roadmap from './Roadmap';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}
