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
      <a className="menu-item" href="/#sec1ua">
        ГРОМАДЯНИ УКРАЇНИ!
      </a>
      <a className="menu-item" href="/#sec2ua">
        ЗАХИСТ ВІКОН
      </a>
      <a className="menu-item" href="/#sec3ua">
        ЗАСИПКА ВГЛИБЛЕНОГО ПІДВАЛЬНОГО ВІКНА
      </a>
      <a className="menu-item" href="/#sec4ua">
        ОБВАЛУВАННЯ ЗОВНІШНІХ СТІН
      </a>
      <a className="menu-item" href="/#sec5ua">
        ЗМІЦНЕННЯ СТЕЛІ
      </a>
      <a className="menu-item" href="/#sec6ua">
        ПАМ'ЯТАЙТЕ, ЩО НАЙГОЛОВНІШЕ – ЦЕ ЗМІЦНИТИ ВІКНА ТА СТЕЛЮ!
      </a>
      <a className="menu-item" href="/#sec7ua">
        ДОДАТКОВА ІНФОРМАЦІЯ
      </a>
    </MenuUa>
  );
};
