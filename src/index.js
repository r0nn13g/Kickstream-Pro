import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Channel from './components/Channel';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GetChannels from './components/GetChannels';
import RemoveBannedChannel from './components/RemoveBannedChannel';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Channel />}></Route>
        <Route path="/channels" element={<GetChannels />}></Route>
        <Route path="/dev" element={<RemoveBannedChannel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
