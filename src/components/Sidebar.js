import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Routes, Route, NavLink } from "react-router-dom";

export default (props) => {
  return (
    <Routes>
      <Route path="pl" element={<PL />} />
      <Route path="ru" element={<RU />} />
      <Route path="/" element={<UA />} />
    </Routes>
  );
};

function UA() {
  return (
    <Menu>
      <ul className="nav">
        <li>
          <a href="/">UA</a>
        </li>
        <li>
          <a href="/ru">RU</a>
        </li>
        <li>
          <a href="/pl">PL</a>
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
    </Menu>
  );
}

function RU() {
  return (
    <Menu>
      <ul className="nav">
        <li>
          <a href="/">UA</a>
        </li>
        <li>
          <a href="/ru">RU</a>
        </li>
        <li>
          <a href="/pl">PL</a>
        </li>
      </ul>
      <a className="menu-item" href="#sec1">
        ГРАЖДАНE УКРАИНЬI!
      </a>
      <a className="menu-item" href="#sec2">
        ЭАЩИТА ОКОН
      </a>
      <a className="menu-item" href="#sec3">
        ЭАСЬІПКА УГЛУБЛЕННОГО ПОДВАЛЬНОГО ОКНА
      </a>
      <a className="menu-item" href="#sec4">
        ОБВАЛОВКА НАРУЖНЬІХ СТЕН
      </a>
      <a className="menu-item" href="#sec5">
        УКРЕПЛЕНИЕ ПОТОЛКА
      </a>
      <a className="menu-item" href="#sec6">
        УСЛОВНЬІЙ РИСУНОК ПОКАЗЬІВАЮЩИЙ ОСНОВНЬІЕ ИЗМЕНЕНИЯ
      </a>
      <a className="menu-item" href="#sec7">
        ОСТАЛЬНАЯ ИНФОРМАЦИЯ
      </a>
    </Menu>
  );
}
function PL() {
  return (
    <Menu>
      <ul className="nav">
        <li>
          <a href="/">UA</a>
        </li>
        <li>
          <a href="/ru">RU</a>
        </li>
        <li>
          <a href="/pl">PL</a>
        </li>
      </ul>
      <a className="menu-item" href="#sec1">
        OBYWATELE UKRAINY!
      </a>
      <a className="menu-item" href="#sec2">
        OCHRONA OKIEN
      </a>
      <a className="menu-item" href="#sec3">
        WYPEŁNIENIE OKNA PIWNICY ZNAJDUJĄCEGO SIĘ PONIŻEJ POZIOMU GRUNTU
      </a>
      <a className="menu-item" href="#sec4">
        OBŁOŻENIE ŚCIAN ZEWNĘTRZNYCH
      </a>
      <a className="menu-item" href="#sec5">
        WZMOCNIENIE SUFITU
      </a>
      <a className="menu-item" href="#sec6">
        RYSUNEK POGLĄDOWY PRZEDSTAWIAJĄCY NAJWAŻNIEJSZE ZMIANY
      </a>
      <a className="menu-item" href="#sec7">
        INFORMACJE DODATKOWE
      </a>
    </Menu>
  );
}
