import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="container-fluid">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/courses" element={<CourseDetails />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <div className="container-fluid">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
