import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Lobby from './pages/lobby';
import Navbar from './components/navbar';
import WaitingRoom from './pages/waitingroom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/waitingRoom" element={<WaitingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
