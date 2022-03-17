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
      <a className="menu-item" href="/#sec1pl">
        OBYWATELE UKRAINY!
      </a>
      <a className="menu-item" href="/#sec2pl">
        OCHRONA OKIEN
      </a>
      <a className="menu-item" href="/#sec3pl">
        WYPEŁNIENIE OKNA PIWNICY ZNAJDUJĄCEGO SIĘ PONIŻEJ POZIOMU GRUNTU
      </a>
      <a className="menu-item" href="/#sec4pl">
        OBŁOŻENIE ŚCIAN ZEWNĘTRZNYCH
      </a>
      <a className="menu-item" href="/#sec5pl">
        WZMOCNIENIE SUFITU
      </a>
      <a className="menu-item" href="/#sec6pl">
        RYSUNEK POGLĄDOWY PRZEDSTAWIAJĄCY NAJWAŻNIEJSZE ZMIANY
      </a>
      <a className="menu-item" href="/#sec7pl">
        INFORMACJE DODATKOWE
      </a>
    </MenuPl>
  );
};
