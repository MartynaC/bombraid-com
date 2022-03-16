import React from "react";
import { slide as MenuUa } from "react-burger-menu";

export default (props) => {
  return (
    <MenuUa>
      <ul className="nav">
        <li>
          <a href="/">PL</a>
        </li>
        <li>
          <a href="/ru">RU</a>
        </li>
        <li>
          <a href="/ua">UA</a>
        </li>
      </ul>
      <a className="menu-item" href="#sec1">
        Ukraińskie menu
      </a>
      <a className="menu-item" href="/salads">
        Ukraińskie menu
      </a>
      <a className="menu-item" href="/pizzas">
        Ukraińskie menu
      </a>
      <a className="menu-item" href="/desserts">
       Ukraińskie menu
      </a>
      <a className="menu-item" href="/desserts">
         Ukraińskie menu
      </a>
      <a className="menu-item" href="/desserts">
         Ukraińskie menu
      </a>
      <a className="menu-item" href="/desserts">
        Ukraińskie menu
      </a>
    </MenuUa>
  );
};
