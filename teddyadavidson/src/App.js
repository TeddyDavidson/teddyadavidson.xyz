import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/';
import About from './pages/about';

function App(){
return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='../pages/' component={Home} />
        <Route path='../pages/about' component={About} />
      </Routes>
    </Router>
  );
}


export default App;