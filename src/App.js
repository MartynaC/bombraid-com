import "./App.css";
import Menu from "./components/Menu.js";
import BackToTop from "./components/BackToTop.js";
import { LightgalleryItem } from "react-lightgallery";
import { Routes, Route, Link } from "react-router-dom";
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
import pdf from "./pdf/Final_КАК-УКРЕПИТЬ-ПОДВАЛ.pdf";

function App() {
  return (
    
    <div className="App">
   
       <Routes>
        <Route path="/" element={<PL />} />
        <Route path="ru" element={<RU />} />
        <Route path="ua" element={<UA />} />
      </Routes>
    
     
    
    </div>
  );
}
function PL() {
  return (
    <>
     
      <nav>
        <Link to="/">PL</Link>
        <Link to="/ru">RU</Link>
        <Link to="/ua">UA</Link>
        <Menu right />
      </nav>
      <section className="sect-1">
        <h1>
          КАК <br /> УКРЕПИТЬ <br /> ПОДВАЛ
        </h1>
      </section>
      <section className="sect-2">
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
          <button className="button">завантажити pdf</button>
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
        <p className="bodyM">Перейдем к конкретным шагам.</p>
        <br />
      </section>
      <section className="sect-3">
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
        <img src={asset2} alt="" />
        <br />
        <br />
        <strong>ВАРИАНТ 2: Мешки с песком</strong>
        <br />
        <br />
        <img src={asset3} alt="" />
        <br />
        <img src={asset4} alt="" />
        <br />
        <p className="bodyM">
          Кроме мешков с песком / обсыпки необходимо также закрыть окна с двух
          сторон досками и засыпать пространство между ними.
        </p>
        <br />
        <img src={asset5} alt="" />
        <br />
        <br />
        <hr />
        <br />
        <h2>ЭАСЬІПКА УГЛУБЛЕННОГО ПОДВАЛЬНОГО ОКНА</h2>
        <br />
        <img src={asset6} alt="" />
        <br />
        <br />
        <hr />
        <br />
        <h2>ОБВАЛОВКА НАРУЖНЬІХ СТЕН</h2>
        <br />
        <img src={asset7} alt="" />
        <br />
        <p className="bodyM">Обваловка мешками с песком и кругляками</p>
        <br />
        <img src={asset8} alt="" />
        <br />
        <p className="bodyM">Обваловка грунтом</p>
        <br />
        <hr />
        <br />
        <h2>УКРЕПЛЕНИЕ ПОТОЛКА</h2>
        <p className="bodyM">Необходимо на случай обрушения здания.</p>
        <br />
        <img src={asset9} alt="" />
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
        <img src={asset10} alt="" />
        <br />
        <img src={asset11} alt="" />
        <br />
        <img src={asset12} alt="" />
        <br />
        <br />
        <hr />
        <br />
        <h2>
          В СЛУЧАЕ ДЕФИЦИТА ВРЕМЕНИ И МАТЕРИАЛОВ МОЖНО ОБОЙТИСЬ БЕЗ БРУСЬЕВ,
          ОПИРАЯ ПОТОЛОК НЕПОСРЕДСТВЕННО НА БАЛКАХ
        </h2>
        <br />
        <img src={asset13} alt="" />
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
        <img src={asset14} alt="" />
        <br />
        <br />
        <img src={asset15} alt="" />
        <br />
        <br />
        <br />
      </section>
      <section className="sect-4">
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
              Разработка: <br /> Перевод:
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
              Martyna & Adrien <br />
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
      <Link to="/">PL</Link>
        <Link to="/ru">RU</Link>
        <Link to="/ua">UA</Link>
        <Menu />
      </nav>   
      <section className="sect-1">
      <h1>
        КАК <br /> УКРЕПИТЬ <br /> ПОДВАЛ
      </h1>
       </section>
      <section className="sect-2">
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
            <img
              src={bomba}
              alt=""
            />
          </div>
        </div>
        <br />
        <button className="button">завантажити pdf</button>
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
        <p className="bodyM">Перейдем к конкретным шагам.</p>
        <br />
      </section>
    </>
  );
}
function UA() {
  return (
    <>
      <nav>
      <Link to="/">PL</Link>
        <Link to="/ru">RU</Link>
        <Link to="/ua">UA</Link>
        <Menu />
      </nav>
 

    </>
  );
}

export default App;
