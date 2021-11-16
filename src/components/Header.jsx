import React from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux'

import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';

import './Header.css'

const Header = (props) => {
    const {productsNumberCart} = props;
    return(
        <header className="border-bottom mb-1">
            {/* Continutul header-ului trebuie sa fie centrat si sa nu depaseasca dimensiunile
            minime si maxime(320px->1200px) => avem nevoie de clasele container-fluid container-min-max-width*/}
            {/* Celelalte 3 clase sunt clase de Bootstrap, echivalente propritatilor de flex. */}
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    {/* Utilizarea logo-ului */}
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    <Link to="/login" className="h5">Login</Link>
                    {/* ShoppingCart este un SVG! */}
                    <Link to="/cart">
                    <ShoppingCart className="ml-2"/>
                    {productsNumberCart}
                    </Link>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        productsNumberCart: state.products.length
    }
}

export default connect(mapStateToProps)(Header);