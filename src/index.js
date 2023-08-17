import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js'
import Navbar from './components/Navbar.js';
import FourOhFour from './pages/FourOhFour.js';
// import ShowTrending from './pages/ShowTrending.js';
import CreateChannels from './pages/CreateChannels.js';
import Support from './pages/Support.js';
import Live from './pages/ShowLive.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<FourOhFour/>}></Route>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path="/trending" element={<ShowTrending />}></Route> */}
        <Route path="/create" element={<CreateChannels />}></Route>
        <Route path="/support" element={<Support/>}></Route>
        <Route path="/Live" element={<Live />}></Route>
      </Routes>
      <Navbar/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);