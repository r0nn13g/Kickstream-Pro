import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShowChannels from './pages/ShowChannels.js';
import Navbar from './components/Navbar.js';
import FourOhFour from './pages/FourOhFour.js';
import Home from './pages/HomePage.js';
import Support from './pages/Support.js';
import CreateChannels from './components/CreateChannels.js';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='*' element={<FourOhFour/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path="/channels" element={<ShowChannels />}></Route>
        <Route path="/create" element={<CreateChannels />}></Route>
        <Route path="/support" element={<Support/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);