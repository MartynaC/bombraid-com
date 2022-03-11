import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu>
    
       <ul className="nav">
                <li><a href="/index.html">PL</a></li>
                <li><a href="/products/product-1.html">RU</a></li>
                <li><a href="/contact.html">UA</a></li>
              </ul>
      <a className="menu-item" href="#sec1">
        ГРАЖДАНE УКРАИНЬI!
      </a>
      <a className="menu-item" href="/salads">
        ЭАЩИТА ОКОН
      </a>
      <a className="menu-item" href="/pizzas">
        ЭАСЬІПКА УГЛУБЛЕННОГО ПОДВАЛЬНОГО ОКНА
      </a>
      <a className="menu-item" href="/desserts">
        ОБВАЛОВКА НАРУЖНЬІХ СТЕН
      </a>
      <a className="menu-item" href="/desserts">
        УКРЕПЛЕНИЕ ПОТОЛКА
      </a>
      <a className="menu-item" href="/desserts">
        УСЛОВНЬІЙ РИСУНОК ПОКАЗЬІВАЮЩИЙ ОСНОВНЬІЕ ИЗМЕНЕНИЯ
      </a>
      <a className="menu-item" href="/desserts">
        ОСТАЛЬНАЯ ИНФОРМАЦИЯ
      </a>
    </Menu>
  );
};
