import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    <Menu>
      <ul className="nav">
        <li>
          <a href="/pl">PL</a>
        </li>
        <li>
          <a href="/ru">RU</a>
        </li>
        <li>
          <a href="/">UA</a>
        </li>
      </ul>
      <a className="menu-item" href="/ru/#sec1ru">
        ГРАЖДАНE УКРАИНЬI!
      </a>
      <a className="menu-item" href="/ru/#sec2ru">
        ЭАЩИТА ОКОН
      </a>
      <a className="menu-item" href="/ru/#sec3ru">
        ЭАСЬІПКА УГЛУБЛЕННОГО ПОДВАЛЬНОГО ОКНА
      </a>
      <a className="menu-item" href="/ru/#sec4ru">
        ОБВАЛОВКА НАРУЖНЬІХ СТЕН
      </a>
      <a className="menu-item" href="/ru/#sec5ru">
        УКРЕПЛЕНИЕ ПОТОЛКА
      </a>
      <a className="menu-item" href="/ru/#sec6ru">
        УСЛОВНЬІЙ РИСУНОК ПОКАЗЬІВАЮЩИЙ ОСНОВНЬІЕ ИЗМЕНЕНИЯ
      </a>
      <a className="menu-item" href="/ru/#sec7ru">
        ОСТАЛЬНАЯ ИНФОРМАЦИЯ
      </a>
    </Menu>
  );
};
