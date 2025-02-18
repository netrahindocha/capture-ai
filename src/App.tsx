import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Dashboard from "./components/Dashboard.tsx";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import SignUp from "./components/SignUp.tsx";
import Recording from "./components/Recording.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recording" element={<Recording />} />
      </Routes>
    </div>
  );
}

export default App;
