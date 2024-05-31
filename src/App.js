import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Footer from './components/Footer';
// import Header from './components/Header';
// import Booking from './components/Booking';
import Main from './components/Main';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <>
        <Nav />
        <Main />
        <Menu />
        <Footer />
      </>
    </div>
    </Router>
  );
}

export default App;
