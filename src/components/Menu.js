import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/index.html">PL</a></li>
                <li><a href="/products/product-1.html">RU</a></li>
                <li><a href="/contact.html">UA</a></li>
            </ul>
        );
    }
}