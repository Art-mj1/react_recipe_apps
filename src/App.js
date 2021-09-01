import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";

import "./css/App.css";
import "./css/Reset.css";
import "./css/Recipe.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        {/* <Home /> */}
        <Route path='/' exact component={Home} />
        <Route path='/details' component={Details} />
      </div>
    </Router>
  );
}

export default App;
