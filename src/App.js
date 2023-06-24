import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative top-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
