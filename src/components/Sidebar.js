import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu>
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
      <a className="menu-item" href="/#sec1ru">
        ГРАЖДАНE УКРАИНЬI!
      </a>
      <a className="menu-item" href="/#sec2ru">
        ЭАЩИТА ОКОН
      </a>
      <a className="menu-item" href="/#sec3ru">
        ЭАСЬІПКА УГЛУБЛЕННОГО ПОДВАЛЬНОГО ОКНА
      </a>
      <a className="menu-item" href="/#sec4ru">
        ОБВАЛОВКА НАРУЖНЬІХ СТЕН
      </a>
      <a className="menu-item" href="/#sec5ru">
        УКРЕПЛЕНИЕ ПОТОЛКА
      </a>
      <a className="menu-item" href="/#sec6ru">
        УСЛОВНЬІЙ РИСУНОК ПОКАЗЬІВАЮЩИЙ ОСНОВНЬІЕ ИЗМЕНЕНИЯ
      </a>
      <a className="menu-item" href="/#sec7ru">
        ОСТАЛЬНАЯ ИНФОРМАЦИЯ
      </a>
    </Menu>
  );
};
