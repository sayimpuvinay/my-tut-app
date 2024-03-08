import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; // Import Home component
import Ustate from './ustate';
import Ueffect from './ueffect';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ustate" element={<Ustate />} />
        <Route path="/ueffect" element={<Ueffect />} />
      </Routes>
    </Router>
  );
}

export default App;
