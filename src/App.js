import React from "react";
import GlobalStyles from "styles/GlobalStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Course from "pages/Course";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <head>
        <title>Certificate NFT</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </head>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/course" element={<Course />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
