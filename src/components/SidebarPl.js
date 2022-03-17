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
 <a className="menu-item" href="/#sec1">
        OBYWATELE UKRAINY!
      </a>
      <a className="menu-item" href="/#sec2">
        OCHRONA OKIEN
      </a>
      <a className="menu-item" href="/#sec3">
        WYPEŁNIENIE OKNA PIWNICY ZNAJDUJĄCEGO SIĘ PONIŻEJ POZIOMU GRUNTU
      </a>
      <a className="menu-item" href="/#sec4">
        OBŁOŻENIE ŚCIAN ZEWNĘTRZNYCH
      </a>
      <a className="menu-item" href="/#sec5">
        WZMOCNIENIE SUFITU
      </a>
      <a className="menu-item" href="/#sec6">
        RYSUNEK POGLĄDOWY PRZEDSTAWIAJĄCY NAJWAŻNIEJSZE ZMIANY
      </a>
      <a className="menu-item" href="/#sec7">
        INFORMACJE DODATKOWE
      </a>
    </MenuPl>
  );
};
