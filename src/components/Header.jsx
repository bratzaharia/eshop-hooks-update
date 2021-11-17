import React from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux'
import { logoutUser } from '../redux/actions/user'

import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { ReactComponent as Favourites } from '../assets/icons/heart-solid.svg';

import './Header.css'

const Header = props => {
    const {productsNumberCart, productsNumberFavourites, user, logout} = props;
    return(
        <header className="border-bottom mb-1">
            {/* Continutul header-ului trebuie sa fie centrat si sa nu depaseasca dimensiunile
            minime si maxime(320px->1200px) => avem nevoie de clasele container-fluid container-min-max-width*/}
            {/* Celelalte 3 clase sunt clase de Bootstrap, echivalente propritatilor de flex. */}
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center ">
                <Link to="/" className="my-3">
                    {/* Utilizarea logo-ului */}
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div className="flex">
                {
                user 
                    ? <>
                        <p>{user.displayName}</p>
                        <button onClick={logout} className="btn btn-outline-primary">Sign out</button>
                    </>
                    : <Link to="/login">
                        <button type="button" className="btn btn-outline-primary">Login</button>
                    </Link>
                }

                    {/* ShoppingCart este un SVG! */}
                    <Link to="/cart">
                    <ShoppingCart className="mx-2"/>
                    {productsNumberCart}
                    </Link>

                    <Link to="/favourites">
                    <Favourites className="mx-2 icon"/>
                    {productsNumberFavourites}
                    </Link>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        productsNumberCart: state.cart.products.length,
        productsNumberFavourites: state.favourite.favourites.length,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
      logout: () => dispatch(logoutUser())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header);