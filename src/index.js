import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Channels from './pages/showChannels.js';
import Navbar from './components/Navbar.js';
import FourOhFour from './pages/fourOhFour.js';
import Home from './pages/homepage.js';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='*' element={<FourOhFour/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path="/channels" element={<Channels />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);