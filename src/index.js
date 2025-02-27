import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.js'
import Navbar from './components/Navbar.js';
import FourOhFour from './pages/FourOhFour.js';
import ShowTrending from './pages/ShowTrending.js';
import SearchChannels from './pages/SearchChannels.js';
import DgnsLive from './components/LiveChannels.js';
import ShowChecker from './pages/ShowChecker.js';
import DisplayVideo from './pages/DisplayVideo';
import Live from './pages/ShowLive.js';
import News from './pages/News';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<FourOhFour/>}/>
        <Route path='/' element={<Home />}/>
        <Route path="/cx" element={<DgnsLive />}/>
        <Route path="/trending" element={<ShowTrending />}/>
        <Route path="/search-channels" element={<SearchChannels />}/>
        <Route path='/news' element={<News />}/>
        <Route path="/videos/:id" element={<DisplayVideo />}/>
        <Route path='/casino-streamers' element={<Live />}/>
        <Route path='/checker' element={<ShowChecker />}/>
      </Routes>
      <Navbar/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);