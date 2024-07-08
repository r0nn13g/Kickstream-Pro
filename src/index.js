import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from './pages/Home.js'
import Navbar from './components/Navbar.js';
import FourOhFour from './pages/FourOhFour.js';
import ShowTrending from './pages/ShowTrending.js';
import CreateChannels from './pages/CreateChannels.js';
import DgnsLive from './components/DgnsLive';
import ShowChecker from './pages/ShowChecker.js';
import Support from './pages/Support.js';
import DisplayVideo from './pages/DisplayVideo';
import Live from './pages/ShowLive.js';
import News from './pages/News';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<FourOhFour/>}/>
        <Route path='/' element={<Live />}/>
        <Route path="/streaming" element={<Live />}/>
        <Route path="/trending" element={<ShowTrending />}/>
        <Route path="/create" element={<CreateChannels />}/>
        <Route path='/news' element={<News />}/>
        <Route path="/videos/:id" element={<DisplayVideo />}/>
        <Route path='/the-network' element={<DgnsLive />}/>
        <Route path='/checker' element={<ShowChecker />}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <Navbar/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);