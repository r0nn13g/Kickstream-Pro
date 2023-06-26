import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import SortedChannels from './components/SortedChannels';
import DevChannel from './components/DevChannel';
import Nav from './components/Nav.js';

export default function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<SortedChannels />}></Route>
        <Route path="/dev" element={<DevChannel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);