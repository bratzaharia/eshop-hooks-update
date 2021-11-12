import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';

import './Header.css'
// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer. Headerul va contine navbar-ul, deci link-urile utile catre alte pagini. Momentan, vom vrea ca
// header-ul sa contina link-uri catre Home si Login
function Header() {
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
                    <ShoppingCart className="ml-2"/>
                </div>
            </div>
        </header>
    );
}

export default Header;