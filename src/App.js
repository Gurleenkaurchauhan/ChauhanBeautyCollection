import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import New from "./components/New";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); 

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#15273C";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <Navbar 
        title="ChauhanBeautyCollection"
        Home="Home"
        TextAbout="About"
        New="New"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Routes>
        <Route path="/" element={<Body mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/new" element={<New mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
