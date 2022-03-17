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
        ГРОМАДЯНИ УКРАЇНИ!
      </a>
      <a className="menu-item" href="#sec2">
        ЗАХИСТ ВІКОН
      </a>
      <a className="menu-item" href="#sec3">
        ЗАСИПКА ВГЛИБЛЕНОГО ПІДВАЛЬНОГО ВІКНА
      </a>
      <a className="menu-item" href="#sec4">
        ОБВАЛУВАННЯ ЗОВНІШНІХ СТІН
      </a>
      <a className="menu-item" href="#sec5">
        ЗМІЦНЕННЯ СТЕЛІ
      </a>
      <a className="menu-item" href="#sec6">
        ПАМ'ЯТАЙТЕ, ЩО НАЙГОЛОВНІШЕ – ЦЕ ЗМІЦНИТИ ВІКНА ТА СТЕЛЮ!
      </a>
      <a className="menu-item" href="#sec7">
        ДОДАТКОВА ІНФОРМАЦІЯ
      </a>
    </MenuUa>
  );
};
