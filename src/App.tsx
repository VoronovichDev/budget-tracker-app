import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Charts from './pages/Charts';
import Main from './pages/Main';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default App;
