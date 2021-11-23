import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Favourites from './pages/Favourites'
import Page404 from './pages/Page404';

import './App.css';
import './utils/utility-classes.css';



const App = () => {

    return (
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route 
          path='/category/:categoryName'
          element={<ProductList />}
        />
        <Route path='/products/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      </Router>
    );
}

export default App;
