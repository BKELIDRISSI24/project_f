import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Heritage from './pages/Heritage'
import CaftansManagement from './pages/CaftansManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/heritage" element={<Heritage />} />
        <Route path="/admin/caftans" element={<CaftansManagement />} />
      </Routes>
    </Router>
  );
}

export default App;