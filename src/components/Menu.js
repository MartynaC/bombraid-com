import React, { Component } from 'react';
import Sidebar from './Sidebar.js';


export default class Menu extends Component {
    render() {
        return (
<li className="hamburger"><Sidebar  outerContainerId={'outer-container'} /></li>     
  );
}

}




