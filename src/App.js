import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios'
import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Cancel from './containers/Cancel';
import Home from './containers/Home';
import Success from './containers/Success';
import CartProvider from '../src/helpers/CartContext';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let user = localStorage.getItem('user')

    if (typeof (user) === 'string') {
      user = JSON.parse(user)
      axios.defaults.headers.common['authentication'] = user.token
      dispatch({ type: 'CHANGE_USER', payload: user })
    }
  })

  return (
    <CartProvider>
      <Container>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
