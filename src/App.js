import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import Navbar from './components/navbar';
import WaitingRoom from './pages/waitingroom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/waitingRoom" element={<WaitingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
