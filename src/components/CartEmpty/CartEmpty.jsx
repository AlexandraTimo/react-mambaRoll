import React from "react";
import Header from "../Header/Header";
import First from "../First/First";
import Footer from "../Footer/Footer";
import AnimatedPage from "../AnimatedPages";
import ce from "../CartEmpty/CartEmpty.module.css";
import { Link } from "react-router-dom";

export default function CartEmpty() {
  return (
    <div>
      <Header />
      <First />
      <AnimatedPage>
        <div className={ce.cartEmpty_wrapper}>
          <div className={ce.cartEmpty_wrapper_container}>
            <div className={ce.cartEmpty_textContainer}>
              <div className={ce.cartEmpty_textContainer_mini}>
                <h1>Корзина пуста</h1>
                <span>
                  Воспользуйтесь меню находящейся выше, чтобы найти всё, что
                  нужно
                </span>
                <Link to="/" className={ce .button_success}>Перейти на главную страницу</Link>
              </div>

            </div>
          </div>
        </div>
      </AnimatedPage>
      <Footer />
    </div>
  );
}
