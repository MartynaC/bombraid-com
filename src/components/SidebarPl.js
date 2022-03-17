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
      <a className="menu-item" href="/pl/#sec1pl">
        OBYWATELE UKRAINY!
      </a>
      <a className="menu-item" href="/pl/#sec2pl">
        OCHRONA OKIEN
      </a>
      <a className="menu-item" href="/pl/#sec3pl">
        WYPEŁNIENIE OKNA PIWNICY ZNAJDUJĄCEGO SIĘ PONIŻEJ POZIOMU GRUNTU
      </a>
      <a className="menu-item" href="/pl/#sec4pl">
        OBŁOŻENIE ŚCIAN ZEWNĘTRZNYCH
      </a>
      <a className="menu-item" href="/pl/#sec5pl">
        WZMOCNIENIE SUFITU
      </a>
      <a className="menu-item" href="/pl/#sec6pl">
        RYSUNEK POGLĄDOWY PRZEDSTAWIAJĄCY NAJWAŻNIEJSZE ZMIANY
      </a>
      <a className="menu-item" href="/pl/#sec7pl">
        INFORMACJE DODATKOWE
      </a>
    </MenuPl>
  );
};
