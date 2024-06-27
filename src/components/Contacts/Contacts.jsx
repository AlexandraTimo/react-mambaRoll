import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import First from "../First/First";
import cont from "../Contacts/Contacts.module.css";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import AnimatedPage from "../AnimatedPages";

export default function Contacts() {
  return (

    <div>
      <Header />
      <First />
      <AnimatedPage>
      <div className={cont.contacts_wrapper}>
        <h1>Карты</h1>
        <div className={cont.map_container}>
          <div className={cont.Ymaps}>
            <YMaps>
              <Map
                width="985px"
                height="394px"
                defaultState={{
                  center: [45.056327, 38.971486],
                  zoom: 15,
                  controls: [],
                  behaviors: ["drag"],
                }}
                // instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
              >
                <Placemark geometry={[45.056327, 38.971486]} />
                <ZoomControl options={{ float: "right" }} />
              </Map>
            </YMaps>
          </div>

          <div className={cont.map__containerText}>
            <ul>
              <li>
                <p>Электронная почта</p>
                <span>mambarolls@gmail.com</span>
              </li>
              <li>
                <p>Адрес</p>
                <span>г. Краснодар, ул. Гаражная 92</span>
              </li>
              <li>
                <p>Номер телефона</p>
                <span>+7 (861) 945-28-28</span>
              </li>
              <li>
                <p>Время работы</p>
                <span>ежедневно с 11:00 до 23:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </AnimatedPage>
      <Footer />
    </div>

  );
}
