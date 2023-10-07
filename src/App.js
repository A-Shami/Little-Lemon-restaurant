import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Menu from './screens/Menu/Menu';
import Order from './screens/Order/Order';
import Reservation from './screens/Reservations/Reservations';
import Login from './screens/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/Reservation' element={<Reservation />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
