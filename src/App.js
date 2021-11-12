import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import Category from './pages/Category'

import './App.css';
import './utils/utility-classes.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    // Daca componenta a fost inclusa intr-o componenta de tip "Route"(vezi App.js)
    // => automat in this.props vin 3 atribute: history, location, match
    console.log(this.props);
    // In match gasim parametri rutei
    // Parametri primiti in ruta se gasesc in cheia params, sub numele dat in componenta
    // Route corespunzatoare(din App.js).
    // const categoryName = match.params.categoryName;
    // Folosindu-ne de categoria venita din URL, extragem din fisierul JSON doar informatiile
    // necesare acesteia, acualizand state-ul
    // this.setState({ category: products[categoryName] });
}

  render() {
    return (
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route 
          path='/category/:categoryName'
          element={<Category />}
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
      </Router>
    );
  }
}

export default App;
