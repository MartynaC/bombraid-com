import React, { Component } from 'react';
import Sidebar from './Sidebar.js';


export default class Menu extends Component {
    render() {
        return (
            <ul className="nav">
                <li><a href="/index.html">PL</a></li>
                <li><a href="/products/product-1.html">RU</a></li>
                <li><a href="/contact.html">UA</a></li>
                <li className="hamburger"><Sidebar customBurgerIcon={ <img src=".src/img/bars-solid.svg" /> } outerContainerId={'outer-container'} /></li>
            </ul>
  );
}

}




