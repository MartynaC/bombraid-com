import "./App.css";
import Menu from "./components/Menu.js";
import MenuPl from "./components/MenuPl.js";
import MenuUa from "./components/MenuUa.js";
import BackToTop from "./components/BackToTop.js";
import { LightgalleryItem } from "react-lightgallery";
import { Routes, Route, NavLink } from "react-router-dom";
import lupka from "./img/lupka.svg";
import bomba from "./img/bomb.svg";
import asset1 from "./img/asset1.svg";
import asset2 from "./img/Asset2.svg";
import asset3 from "./img/Asset3.svg";
import asset4 from "./img/Asset4.svg";
import asset5 from "./img/Asset5.svg";
import asset6 from "./img/Asset6.svg";
import asset7 from "./img/Asset7.svg";
import asset8 from "./img/Asset8.svg";
import asset9 from "./img/Asset9.svg";
import asset10 from "./img/Asset10.svg";
import asset11 from "./img/Asset11.svg";
import asset12 from "./img/Asset12.svg";
import asset13 from "./img/Asset13.svg";
import asset14 from "./img/Asset14.svg";
import asset15 from "./img/Asset15.svg";
import pdf from "./pdf/КАК УКРЕПИТЬ ПОДВАЛ.pdf";
import pdfua from "./pdf/ЯК ЗМІЦНИТИ ПІДВАЛ.pdf";
import pdfpl from "./pdf/JAK WZMOCNIĆ PIWNICĘ.pdf";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="pl" element={<PL />} />
        <Route path="ru" element={<RU />} />
        <Route path="/" element={<UA />} />
      </Routes>
    </div>
  );
}
function PL() {
  return (
    <>
      <nav>
        <NavLink
          to="/pl"
          className={(isActive) => "pl" + (!isActive ? " unselected" : "")}
        >
          PL
        </NavLink>
        <NavLink
          to="/ru"
          className={(isActive) => "ru" + (!isActive ? " unselected" : "")}
        >
          RU
        </NavLink>
        <NavLink
          to="/"
          className={(isActive) => "ua" + (!isActive ? " unselected" : "")}
        >
          UA
        </NavLink>
        <MenuPl right />
      </nav>
      <section className="sect-1">
        <h1>
          JAK <br /> WZMOCNIĆ <br /> PIWNICĘ
        </h1>
      </section>
      <section className="sect-2 pl">
        <div
          style={{
            width: "100%",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "60%" }}>
            <h3>
              WSKAZÓWKI DO PRZYGOTOWANIA MIEJSCA UKRYCIA W DOMU MIESZKALNYM
            </h3>
          </div>
          <div className="bomb-image" style={{ width: "40%" }}>
            <img src={bomba} alt="" />
          </div>
        </div>
        <br />
        <a href={pdfpl} download>
          <button className="button">ściągnij PDF</button>
        </a>

        <br />
        <br />
        <br />
        <h2 id="sec1">OBYWATELE UKRAINY!</h2>
        <br />
        <p className="bodyM">
          Ten poradnik został stworzony po to, aby przygotować piwnicę na
          wypadek ataku powietrznego lub artyleryjskiego.
          <br /> Najlepszym sposobem ochrony siebie i swoich bliskich jest
          ukrycie się w bezpiecznym miejscu. Do takich miejsc należą znajdujące
          się pod ziemią: suterena i piwnica.
        </p>
        <br />
        <h1>dowolnego budynku mieszkalnego!</h1>
        <br />
        <p className="bodyM">
          Jednakże potrzebują one specjalnego przygotowania.
          <br /> W tym poradniku opowiemy jak to zrobić w najprostszy sposób.
        </p>
        <br />
        <h2>MIEJSCA UKRYCIA PRZEZNACZONE SĄ DO OBRONY PRZED:</h2>
        <br />
        <p className="bodyM">
          <ul>
            {" "}
            <li>Odłamkami bomb lotniczych i pocisków artyleryjskich </li>
            <li>Falą uderzeniową bomb lotniczych i pocisków artyleryjskich </li>
            <li>
              Naruszeniem konstrukcji lub zawaleniem się budynków lub ich części
            </li>
          </ul>
        </p>
        <br />
        <p className="bodyM">
          <strong>
            Jeśli suterena budynku mieszkalnego wystaje ponad poziom gruntu,
          </strong>
          <br />
          to konieczne jest jej wzmocnienie z zewnątrz (co najmniej do wysokości
          okien).
          <br />
          <br />
          <strong>Oprócz tego w każdej piwnicy bądź suterenie</strong>
          <br />
          konieczne jest wzmocnienie sufitu.
        </p>
        <br />
        <p className="bodyM">
          Na miejsca ukrycia nadają się piwnice i sutereny budynków typu
          chruszczowka, z wielkiej płyty a także nowego budownictwa.
          <br />
          <br />
          <br /> Przejdźmy do konkretnych rozwiązań
        </p>
        <br />
      </section>
      <section className="sect-3">
        <h2>OCHRONA OKIEN</h2>
        <p className="bodyM">
          Okna są najsłabszą częścią piwnicy lub sutereny, dlatego należy je
          zabezpieczyć w następujący sposób
        </p>
        <br />
        <strong>WARIANT 1: Worki z piaskiem</strong>
        <br />
        <br />
        <LightgalleryItem src={asset1}>
          <img src={asset1} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <p className="bodyM">
          20-60-20 to umowne wielkości pokazujące wzajemną zależność okna i
          brzegów desek przed nim
        </p>
        <br />
        <LightgalleryItem src={asset2}>
          <img src={asset2} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <strong>WARIANT 2: obłożenie ziemią</strong>
        <br />
        <br />
        <LightgalleryItem src={asset3}>
          <img src={asset3} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset4}>
          <img src={asset4} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          Oprócz worków z piaskiem/obsypania konieczne jest zakrycie okien z
          dwóch stron deskami i zasypanie przestrzeni między nimi.
        </p>
        <br />
        <LightgalleryItem src={asset5}>
          <img src={asset5} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>
          WYPEŁNIENIE OKNA PIWNICY ZNAJDUJĄCEGO SIĘ PONIŻEJ POZIOMU GRUNTU
        </h2>
        <br />
        <LightgalleryItem src={asset6}>
          <img src={asset6} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>Obłożenie ścian zewnętrznych</h2>
        <br />
        <LightgalleryItem src={asset7}>
          <img src={asset7} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">Obłożenie workami z piaskiem i okrąglakami </p>
        <br />
        <LightgalleryItem src={asset8}>
          <img src={asset8} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">Obłożenie ziemią</p>
        <br />
        <hr />
        <br />
        <h2>Wzmocnienie sufitu</h2>
        <p className="bodyM">
          Konieczne w razie naruszenia konstrukcji budynku.
        </p>
        <br />
        <LightgalleryItem src={asset9}>
          <img src={asset9} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          Pomimo pozornych trudności, wzmocnienie sufitu jest ważnym elementem
          wzmacniającym konstrukcję piwnicy. Nie trzeba wykonać go jeden do
          jednego zgodnie z przedstawionym schematem.
          <br /> <br /> Przedstawiona na schemacie konstrukcja została
          zaprojektowana na wypadek nadzwyczajnych obciążeń, dlatego w celu
          ochrony przed bombami i artylerią wystarczy wzmocnić sufit w
          przybliżeniu, postępując według poniższego schematu.
        </p>
        <br />
        <br />
        <p className="bodyS">
          (Schemat pochodzi ze skryptu obrony cywilnej z roku 1966, dlatego
          konstrukcja jest obliczona również na falę uderzeniową wybuchu
          jądrowego)
        </p>
        <br />
        <LightgalleryItem src={asset10}>
          <img src={asset10} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset11}>
          <img src={asset11} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset12}>
          <img src={asset12} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>
          W PRZYPADKU BRAKU CZASU I MATERIAŁÓW MOŻNA OBEJŚĆ SIĘ BEZ BELEK 12х18
          cm , OPIERAJĄC SUFIT BEZPOŚREDNIO NA BELKACH 14х22 cm
        </h2>
        <br />
        <LightgalleryItem src={asset13}>
          <img src={asset13} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          W celu wzmocnienia konstrukcji z drewna można wykorzystać łączniki z
          wkrętami lub skoble do drewna.
        </p>
        <strong>
          Należy pamiętać, że najważniejsze jest wzmocnienie okien i sufitu!
        </strong>
        <br />
        <br />
        <hr />
        <br />
        <h2>RYSUNEK POGLĄDOWY PRZEDSTAWIAJĄCY NAJWAŻNIEJSZE ZMIANY</h2>
        <br />
        <LightgalleryItem src={asset14}>
          <img src={asset14} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <LightgalleryItem src={asset15}>
          <img src={asset15} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <br />
      </section>
      <section className="sect-4 pl">
        <br />
        <br />
        <h1>INFORMACJE DODATKOWE</h1>
        <ul>
          <li className="bodyM">
            Należy pamiętać o zaopatrzeniu miejsca ukrycia w zapas wody pitnej,
            jedzenia i lekarstw.
          </li>
          <li className="bodyM">
            Należy mieć ze sobą narzędzia takie jak łopaty i łom, w razie
            potrzeby ich wykorzystania w przypadku zawalenia budynku, aby od
            środka wspomóc pracę służb ratowniczych.
          </li>
          <li className="bodyM">
            Należy posiadać kilka gaśnic na wypadek pożaru.
          </li>
          <li className="bodyM">
            Jeśli nie ma kanałów wentylacyjnych, należy zostawić niewielkie
            szczeliny w zabezpieczeniu okien (o szerokości nie większej niż 5
            cm).
          </li>
          <li className="bodyM">
            W miejscu ukrycia być może trzeba będzie spędzić dużo czasu, dlatego
            trzeba przygotować je gruntownie, zachowując jednak choćby namiastkę
            komfortu.
          </li>
          <li className="bodyM">
            Przypominamy raz jeszcze, że sufitu nie trzeba wzmacniać dokładnie
            tak samo jak na schemacie; odległość kolumn można zwiększyć do 2-3
            metrów jeśli nie ma wystarczająco dużo czasu lub materiałów, a pod
            sufit można wstawić belki 14х22 cm.
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <p className="bodyS">
          Niniejszy poradnik przygotowano na podstawie:
          <br />
          <br /> TECHNICZNE ZASADY PRZYSTOSOWANIA PIWNIC POD BUDYNKAMI NA
          UKRYCIA ZABEZPIECZAJACE, WYDAWNICTWO MINISTERSTWA OBRONY NARODOWEJ
          INSPEKTORAT POWSZECHNEJ SAMOOBRONY 1966
        </p>
        <br />
        <hr />
        <br />
        <div
          style={{
            width: "100%",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <p className="bodyS">
              Autorzy: <br /> Opracowanie graficzne: <br /> Strona www: <br />
              Kodowanie: <br /> <br />
              Tłumaczenie:
              <br />
              <br />
              <br /> Polska 2022
            </p>
          </div>
          <div style={{ width: "50%", float: "right" }}>
            <p className="bodyS">
              коллектив Obrona PRO <br />
              Tomasz Czyżkowski <br />
              Janek Mońka <br />
              Martyna Chojnacka & Adrien Cognac <br />
              Walery Butewicz
            </p>
            <BackToTop />
          </div>
        </div>
      </section>
    </>
  );
}

function RU() {
  return (
    <>
      <nav>
        <NavLink
          to="/pl"
          className={(isActive) => "pl" + (!isActive ? " unselected" : "")}
        >
          PL
        </NavLink>
        <NavLink
          to="/ru"
          className={(isActive) => "ru" + (!isActive ? " unselected" : "")}
        >
          RU
        </NavLink>
        <NavLink
          to="/"
          className={(isActive) => "ua" + (!isActive ? " unselected" : "")}
        >
          UA
        </NavLink>
        <Menu />
      </nav>
      <section className="sect-1">
        <h1>
          КАК <br /> УКРЕПИТЬ <br /> ПОДВАЛ
        </h1>
      </section>
      <section className="sect-2 ru">
        <div
          style={{
            width: "100%",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "60%" }}>
            <h3>РЕКОМЕНДАЦИИ ПО ПОДГОТОВКЕ УКРЬIТИЯ В ЖИЛОМ ДОМЕ</h3>
          </div>
          <div className="bomb-image" style={{ width: "40%" }}>
            <img src={bomba} alt="" />
          </div>
        </div>
        <br />
        <a href={pdf} download>
          <button className="button">завантажити PDF</button>
        </a>
        <br />
        <br />
        <br />
        <h2 id="sec1">ГРАЖДАНE УКРАИНЬI!</h2>
        <br />
        <p className="bodyM">
          Это пособие соэдано для того, чтобы объяснить вам, как подготовить
          свой подвал к воэдушной и артилле рийской атаке.
          <br /> Самьıй лучший способ защитить себя и своих близких – укрьıться
          в безопасном месте. Такими местами являются: углубленные подвал и
          полуподвал.
        </p>
        <br />
        <h1>Любого жилого дома!</h1>
        <br />
        <p className="bodyM">
          Однако для этого они требуют специальной подготовки.
          <br /> В этом пособии мы расскажем как это сделать самым простым
          способом.
        </p>
        <br />
        <h2>УКРЬIТИЯ ПРЕДНАЭНАЧЕНЬI ДЛЯ ЭАЩИТЬI ОТ</h2>
        <br />
        <p className="bodyM">
          <ul>
            {" "}
            <li>Осколков авиабомб и артиллерийских снарядов </li>
            <li>Взрывной волны авиабом и артcнарядов </li>
            <li>Обрушений и завалов зданий и их фрагментов</li>
          </ul>
        </p>
        <br />
        <p className="bodyM">
          <strong>Если у вас вьістающий над грунтом полуподвал</strong>
          <br />– То его необходимо укрепить снаружи (как минимум окна) <br />
          <br />
          <strong>Также в каждом подвале и полуподвале</strong>
          <br />– Необходимо укрепить потолок
        </p>
        <br />
        <p className="bodyM">
          Для обустройства укрытий подойдут подвалы и полуподвалы хрущевок и
          панельных зданий, а также новостроек.
        </p>
        <br />
      </section>
      <section className="sect-3 ru">
        <h2>ЭАЩИТА ОКОН</h2>
        <p className="bodyM">
          Окна являются самой слабой частью подвала и полуподвала, а потому
          необходимо их заложить следующим образом:
        </p>
        <br />
        <strong>ВАРИАНТ 1: Мешки с песком</strong>
        <br />
        <br />
        <LightgalleryItem src={asset1}>
          <img src={asset1} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <p className="bodyM">
          20-60-20 зто условные величины показывающие соотношение окна и краёв
          досок перед ним
        </p>
        <br />
        <LightgalleryItem src={asset2}>
          <img src={asset2} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <strong>ВАРИАНТ 2: Мешки с песком</strong>
        <br />
        <br />
        <LightgalleryItem src={asset3}>
          <img src={asset3} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset4}>
          <img src={asset4} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          Кроме мешков с песком / обсыпки необходимо также закрыть окна с двух
          сторон досками и засыпать пространство между ними.
        </p>
        <br />
        <LightgalleryItem src={asset5}>
          <img src={asset5} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>ЭАСЬІПКА УГЛУБЛЕННОГО ПОДВАЛЬНОГО ОКНА</h2>
        <br />
        <LightgalleryItem src={asset6}>
          <img src={asset6} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>ОБВАЛОВКА НАРУЖНЬІХ СТЕН</h2>
        <br />
        <LightgalleryItem src={asset7}>
          <img src={asset7} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">Обваловка мешками с песком и кругляками</p>
        <br />
        <LightgalleryItem src={asset8}>
          <img src={asset8} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">Обваловка грунтом</p>
        <br />
        <hr />
        <br />
        <h2>УКРЕПЛЕНИЕ ПОТОЛКА</h2>
        <p className="bodyM">Необходимо на случай обрушения здания.</p>
        <br />
        <LightgalleryItem src={asset9}>
          <img src={asset9} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          Не смотря на кажущуюся сложность, укрепление потолка является важным
          этапом усиления конструкции подвала. Необязательно выполнять его один
          в один с представленной схемой.
          <br /> <br /> Каркас на этой схеме рассчитан с запасом на особые
          нагрузки, поэтому для защиты от бомб и артиллерии достаточно укрепить
          потолок следуя схеме хотя бы приблизительно.
        </p>
        <br />
        <br />
        <p className="bodyS">
          (Схема взята из методички 1966 г. по ГО, поэтому каркас рассчитан и на
          волну ядерного взрыва)
        </p>
        <br />
        <LightgalleryItem src={asset10}>
          <img src={asset10} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset11}>
          <img src={asset11} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset12}>
          <img src={asset12} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>
          В СЛУЧАЕ ДЕФИЦИТА ВРЕМЕНИ И МАТЕРИАЛОВ МОЖНО ОБОЙТИСЬ БЕЗ БРУСЬЕВ,
          ОПИРАЯ ПОТОЛОК НЕПОСРЕДСТВЕННО НА БАЛКАХ
        </h2>
        <br />
        <LightgalleryItem src={asset13}>
          <img src={asset13} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          Для скрепления древесины можно использовать крепеж с саморезами либо
          скобы для дерева
        </p>
        <strong>Помните – окна и потолок самое главное для укрепления!</strong>
        <br />
        <br />
        <hr />
        <br />
        <h2>УСЛОВНЬІЙ РИСУНОК ПОКАЗЬІВАЮЩИЙ ОСНОВНЬІЕ ИЗМЕНЕНИЯ</h2>
        <br />
        <LightgalleryItem src={asset14}>
          <img src={asset14} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <LightgalleryItem src={asset15}>
          <img src={asset15} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <br />
      </section>
      <section className="sect-4 ru">
        <br />
        <br />
        <h1>ОСТАЛЬНАЯ ИНФОРМАЦИЯ</h1>
        <ul>
          <li className="bodyM">
            Не забудьте обеспечить в вашем укрытии запас питьевой воды, еды и
            медикаментов
          </li>
          <li className="bodyM">
            Имейте при себе инструмены, такие как лопаты и лом, на случай если
            придётся разгребать завал изнутри помогая спасателям ДСНС
          </li>
          <li className="bodyM">
            Возьмите пару огнетушителей на случай возникновения пожара
          </li>
          <li className="bodyM">
            Если нет вентиляционных каналов, оставьте небольшие проемы в заделке
            окон (не более 5 см толщиной)
          </li>
          <li className="bodyM">
            В укрытии вам придётся провести много времени, а потому подготовьте
            его основательно и с минимальным (хотя бы каким-то) комфортом{" "}
          </li>
          <li className="bodyM">
            Напоминаем ещё раз, что потолок не надо укреплять один в один как на
            схеме, шаг колонн можно увеличить до двух-трех метров если у вас нет
            времени или достаточного количества стройматериалов, а под потолок
            ставить сразу балки
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <p className="bodyS">
          Данное пособие разработано на основе:
          <br />
          <br /> TECHNICZNE ZASADY PRZYSTOSOWANIA PIWNIC POD BUDYNKAMI NA
          UKRYCIA ZABEZPIECZAJACE, WYDAWNICTWO MINISTERSTWA OBRONY NARODOWEJ
          INSPEKTORAT POWSZECHNEJ SAMOOBRONY 1966 / Технические правила
          приспособления подвалов жилых домов в простейшие укрытия,
          издастельство Министерства обороны, Инспекторат гражданской обороны,
          Польша, 1966 г.
        </p>
        <br />
        <hr />
        <br />
        <div
          style={{
            width: "100%",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <p className="bodyS">
              Авторы: <br /> Графический дизайн: <br /> Веб-сайт: <br />{" "}
              Разработка: <br /> <br />
              Перевод:
              <br />
              <br />
              <br /> Польша 2022
            </p>
          </div>
          <div style={{ width: "50%", float: "right" }}>
            <p className="bodyS">
              коллектив Obrona PRO <br />
              Tomasz Czyżkowski <br />
              Janek Mońka <br />
              Martyna Chojnacka & Adrien Cognac <br />
              Walery Butewicz
            </p>
            <BackToTop />
          </div>
        </div>
      </section>
    </>
  );
}
function UA() {
  return (
    <>
      <nav>
        <NavLink
          to="/pl"
          className={(isActive) => "pl" + (!isActive ? " unselected" : "")}
        >
          PL
        </NavLink>
        <NavLink
          to="/ru"
          className={(isActive) => "ru" + (!isActive ? " unselected" : "")}
        >
          RU
        </NavLink>
        <NavLink
          to="/"
          className={(isActive) => "ua" + (!isActive ? " unselected" : "")}
        >
          UA
        </NavLink>
        <MenuUa />
      </nav>

      <section className="sect-1">
        <h1>
          ЯК <br />
          ЗМІЦНИТИ <br /> ПІДВАЛ
        </h1>
      </section>
      <section className="sect-2 ua">
        <div
          style={{
            width: "100%",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "60%" }}>
            <h3>РЕКОМЕНДАЦІЇ ЩОДО ПРИГОТУВАННЯ УКРИТТЯ У ЖИТЛОВОМУ БУДИНКУ</h3>
          </div>
          <div className="bomb-image" style={{ width: "40%" }}>
            <img src={bomba} alt="" />
          </div>
        </div>
        <br />
        <a href={pdfua} download>
          <button className="button">завантажити PDF</button>
        </a>

        <br />
        <br />
        <br />
        <h2 id="sec1">ГРОМАДЯНИ УКРАЇНИ!</h2>
        <br />
        <p className="bodyM">
          Цей посібник створено для того, щоб пояснити вам, як підготувати свій
          підвал до повітряної атаки та артобстрілу.
          <br />
          Найкращий спосіб захистити себе і своїх близьких – це сховатися в
          безпечному місці. Такими місцями є: вглиблений підвал та напівпідвал.
        </p>
        <br />
        <h1>будь-якого житлового будинку!</h1>
        <br />
        <p className="bodyM">
          Проте для цього вони вимагають спеціального облаштування.
          <br /> У цьому посібнику ми пояснимо вам, як це зробити у найпростіший
          спосіб.
        </p>
        <br />
        <h2>УКРИТТЯ ПРИЗНАЧЕННІ ДЛЯ ЗАХИСТУ ВІД:</h2>
        <br />
        <p className="bodyM">
          <ul>
            {" "}
            <li> Уламків авіабомб та артснарядів </li>
            <li>Вибухової хвилі авіабомб та артснарядів</li>
            <li>Обвалів та завалів будівель та їхніх окремих елементів</li>
          </ul>
        </p>
        <br />
        <p className="bodyM">
          <strong>
            Якщо у вас напівпідвал, частина якого вистає над землею,
          </strong>
          <strong>
            <br />
            то його необхідно укріпити зовні (як мінімум вікна). <br />
          </strong>
          <br />
          <strong>Також у кожному підвалі та</strong>
          <br />
          <strong>напівпідвалі необхідно зміцнити стелю.</strong>
        </p>
        <br />
        <p className="bodyM">
          Для облаштування укриття підійдуть підвали та напівпідвали хрущовок та
          панельних будинків, а також новобудов.
        </p>
        <br />
      </section>
      <section className="sect-3 ua">
        <h2>ЗАХИСТ ВІКОН</h2>
        <p className="bodyM">
          Вікна – це найслабкіша частина підвалу та напівпідвалу, тож їх
          необхідно закласти наступним чином:
        </p>
        <br />
        <strong>ВАРІАНТ 1: Мішки з піском</strong>
        <br />
        <br />
        <LightgalleryItem src={asset1}>
          <img src={asset1} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <p className="bodyM">
          20-60-20 це умовні величини, що показують співвідношення вікна і країв
          дощок перед ним
        </p>
        <br />
        <LightgalleryItem src={asset2}>
          <img src={asset2} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <strong>ВАРИАНТ 2: Мешки с песком</strong>
        <br />
        <br />
        <LightgalleryItem src={asset3}>
          <img src={asset3} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset4}>
          <img src={asset4} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          Крім мішків з піском/обвалування землею, також необхідно з обох боків
          закрити вікна дошками та засипати простір між ними.
        </p>
        <br />
        <LightgalleryItem src={asset5}>
          <img src={asset5} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>ЗАСИПКА ВГЛИБЛЕНОГО ПІДВАЛЬНОГО ВІКНА</h2>
        <br />
        <LightgalleryItem src={asset6}>
          <img src={asset6} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>ОБВАЛУВАННЯ ЗОВНІШНІХ СТІН</h2>
        <br />
        <LightgalleryItem src={asset7}>
          <img src={asset7} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">Обвалування мішками з піском та кругляком.</p>
        <br />
        <LightgalleryItem src={asset8}>
          <img src={asset8} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">Обвалування землею</p>
        <br />
        <hr />
        <br />
        <h2>ЗМІЦНЕННЯ СТЕЛІ</h2>
        <p className="bodyM">Необхідно на випадок обвалення будинку.</p>
        <br />
        <LightgalleryItem src={asset9}>
          <img src={asset9} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          конструкції підвалу. Не обов'язково зміцнювати її один в один за
          схемою на зображенні.
          <br /> <br />
          Каркас на цій схемі розрахований на особливі навантаження, тому для
          захисту від бомб та артилерії достатньо зміцнити стелю хоча б
          приблизно взоруючись на цій схемі.
        </p>
        <br />
        <br />
        <p className="bodyS">
          (Схема походить з методички по Цивільній Обороні з 1966 р., тому
          каркас також розрахований на хвилю ядерного вибуху.)
        </p>
        <br />
        <LightgalleryItem src={asset10}>
          <img src={asset10} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset11}>
          <img src={asset11} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <LightgalleryItem src={asset12}>
          <img src={asset12} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <hr />
        <br />
        <h2>
          У РАЗІ ВІДСУТНОСТІ ЧАСУ ТА МАТЕРІАЛІВ МОЖНА ОБІЙТИСЯ БЕЗ БРУСІВ,
          ПІДПИРАЮЧИ СТЕЛЮ БЕЗПОСЕРЕДНЬО НА БАЛКАХ
        </h2>
        <br />
        <LightgalleryItem src={asset13}>
          <img src={asset13} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <p className="bodyM">
          Для скріплення деревини можна використовувати шурупи або скоби для
          дерева.
        </p>
        <strong>Помните – окна и потолок самое главное для укрепления!</strong>
        <br />
        <br />
        <hr />
        <br />
        <h2>Пам'ятайте, що найголовніше – це зміцнити вікна та стелю!</h2>
        <br />
        <LightgalleryItem src={asset14}>
          <img src={asset14} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <LightgalleryItem src={asset15}>
          <img src={asset15} alt="" />
          <img className="lupka" src={lupka} alt="" />
        </LightgalleryItem>
        <br />
        <br />
        <br />
      </section>
      <section className="sect-4 ua">
        <br />
        <br />
        <h1>ДОДАТКОВА ІНФОРМАЦІЯ</h1>
        <ul>
          <li className="bodyM">
            Не забудьте забезпечити ваше укриття запасом питної води, їжі та
            медикаментів
          </li>
          <li className="bodyM">
            Майте при собі такі інструменти, як: лопати і лом на випадок, якщо
            доведеться розгрібати завал зсередини допомагаючи рятувальникам
            Державної Служби з Надзвичайних Ситуацій
          </li>
          <li className="bodyM">
            Візьміть кілька вогнегасників на випадок пожежі
          </li>
          <li className="bodyM">
            Якщо немає вентиляційних каналів, залиште невеликі отвори в
            закладених вікнах (не більше 5 cm завтовшки)
          </li>
          <li className="bodyM">
            У сховищі вам можливо доведеться провести багато часу, тож
            облаштуйте його ґрунтовно і хоча б з мінімальним комфортом
          </li>
          <li className="bodyM">
            Ще раз звертаємо вашу увагу, що не потрібно зміцнювати стелю
            ідентично до схематичного зображення. Крок між колонами можна
            збільшити до 2-3 метрів, а якщо у вас немає часу або достатньої
            кількості будматеріалів, то стелю можна одразу підперти балками
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <p className="bodyS">
          Цей посібник опрацьовано на підставі:
          <br />
          <br /> TECHNICZNE ZASADY PRZYSTOSOWANIA PIWNIC POD BUDYNKAMI NA
          UKRYCIA ZABEZPIECZAJACE, WYDAWNICTWO MINISTERSTWA OBRONY NARODOWEJ
          INSPEKTORAT POWSZECHNEJ SAMOOBRONY 1966 / Технічні правила
          пристосування підвалів житлових будинків під укриття, Видавництво
          Міністерства оборони, Інспекторат Цивільної Оборони, Польща, 1966 р.
        </p>
        <br />
        <hr />
        <br />
        <div
          style={{
            width: "100%",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <p className="bodyS">
              Авторы: <br /> Графический дизайн: <br /> Веб-сайт: <br />{" "}
              Разработка: <br /> <br />
              Перевод:
              <br />
              <br />
              <br /> Польша 2022
            </p>
          </div>
          <div style={{ width: "50%", float: "right" }}>
            <p className="bodyS">
              коллектив Obrona PRO <br />
              Tomasz Czyżkowski <br />
              Janek Mońka <br />
              Martyna Chojnacka & Adrien Cognac <br />
              Walery Butewicz
            </p>
            <BackToTop />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
