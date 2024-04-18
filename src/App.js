// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PastelPage from './pages/PastelPage';
import RainbowPage from './pages/RainbowPage';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/rainbow" element={<RainbowPage />} />
                <Route path="/pastel" element={<PastelPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
