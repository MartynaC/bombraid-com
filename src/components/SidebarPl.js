import React from "react";
import { slide as MenuPl } from "react-burger-menu";

export default (props) => {
  return (
    <MenuPl>
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
        Polskie menu
      </a>
      <a className="menu-item" href="/salads">
        Polskie menu
      </a>
      <a className="menu-item" href="/pizzas">
       Polskie menu
      </a>
      <a className="menu-item" href="/desserts">
      Polskie menu
      </a>
      <a className="menu-item" href="/desserts">
        Polskie menu
      </a>
      <a className="menu-item" href="/desserts">
        Polskie menu
      </a>
      <a className="menu-item" href="/desserts">
       Polskie menu
      </a>
    </MenuPl>
  );
};
