import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Menu from './screens/Menu/Menu';
import Order from './screens/Order/Order';
import Reservation from './screens/Reservations/Reservations';
import Login from './screens/Login/Login';
import Footer from './components/Footer/Footer';
import Nav from './components/Header/Nav';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/Reservation' element={<Reservation />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
