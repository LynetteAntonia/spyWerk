import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Lobby from './pages/lobby';
import Navbar from './components/navbar';
import WaitingRoom from './pages/waitingroom';

const { io } = require("socket.io-client");
const socket = io("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");

  if (username.length >= 3) {
    return <WaitingRoom socket={socket} username={username} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Lobby
              socket={socket}
              username={username}
              setUsername={(name) => setUsername(name)}
            />
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
