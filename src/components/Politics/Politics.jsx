import React from "react";
import Header from "../Header/Header";
import First from "../First/First";
import Footer from "../Footer/Footer";
import pol from "../Politics/Politics.module.css";

export default function Politics() {
  return (
    <div>
      <Header />
      <First />
      <div className={pol.politics_wrapper}>
        <h1>Политика конфиденциальности</h1>
        <div className={pol.politics_wrapper_container}>
          <ul className={pol.text_container}>
            <li>
              <p>Пункт 1</p>
              <span>г. Краснодар, ул. Гаражная, 92</span>
            </li>
            <li>
              <p>Пунк 2</p>
              <span>г. Краснодар, ул. Гаражная, 92</span>
              <span>Время работы с 11:00 до 23:00</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
