import React from "react";
import Header from "../Header/Header";
import First from "../First/First";
import Footer from "../Footer/Footer";
import not from "../404/NotFoud.module.css";
import notImage from "../../img/404.webp";

export default function NotFound() {
  return (
    <div>
      <Header />
      <First />
      <div className={not.notFound_wrapper}>
        <div className={not.notFound_wrapper_container}>
          <img src={notImage} alt="notImage" />
          <ul className={not.notFound__text_container}>
            <li>
              <h1>Ой, что-то пошло не так</h1>
              <span>Мы уже работаем над этим, а пока вы можете ознакомиться с нашим меню</span>
            </li>
          </ul>

        </div>
      </div>
      <Footer />
    </div>
  );
}
