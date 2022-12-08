import React from "react";
import MyNav from "./components/Navbar";
import { Row, Col, Container } from "react-bootstrap";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div id="main-con">
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
