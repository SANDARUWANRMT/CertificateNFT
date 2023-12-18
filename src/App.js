import React from "react";
import GlobalStyles from "styles/GlobalStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Home from "./pages/Home";


import Course from "pages/Course";
import Courses from "pages/Courses";
import Tutors from "pages/Tutors";
import ClaimCerticate from "pages/ClaimCerticate";


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
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/course" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/" element={<Home />} />
          <Route path="/ClaimCertificate" element={<ClaimCerticate/>} />
        </Routes>
      </Router>
    </>
  );
}
