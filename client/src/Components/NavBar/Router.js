import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Index-Home/Index-Home";
import Test from "../../Pages/TestPage/Test";
import Catalog from "../../Pages/Catalog/Catalog";
import About from "../../Pages/About/About";
import Prices from "../../Pages/Prices/Prices";
import Contact from "../../Pages/Contact/Contact";
import Request from "../../Pages/Request/Request";
import Privacy from "../../Pages/Privacy/Privacy";
import Designs from "../../Pages/Designs/Designs";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Test" element={<Test />} />
        <Route exact path="/Catalog" element={<Catalog />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Prices" element={<Prices />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Request" element={<Request />} />
        <Route exact path="/Privacy" element={<Privacy />} />
        <Route exact path="/Designs" element={<Designs />} />
      </Routes>
    </Router>
  );
};
export default Routing;