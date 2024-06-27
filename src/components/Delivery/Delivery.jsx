import React from "react";
import Header from "../Header/Header";
import First from "../First/First";
import del from "../Delivery/Delivery.module.css";
import Footer from "../Footer/Footer";
import AnimatedPage from "../AnimatedPages";

export default function Delivery() {
  return (

    <div>
      <Header />
      <First />
      <AnimatedPage>
      <div className={del.delivery_wrapper}>
        <h1>Как сделать заказ</h1>
        <div className={del.delivery_wrapper_container}>
          <ul className={del.text_container}>
            <li>
              <p>На сайте</p>
              <span>
                Выбираете блюдо, добавляете в корзину и оформляете заказ.
                В течении 15 минут мы с вами свяжемся для подтверждения заказа.
              </span>
            </li>
            <li>
              <p>По телефону</p>
              <span>
                Позвонить по номеру +7 (861) 945-28-28 и заказать выбранные
                блюда.
              </span>
            </li>
          </ul>
        </div>
        <h1>Как получить заказ?</h1>
        <div className={del.delivery_wrapper_container}>
          <ul className={del.text_container}>
            <li>
              <p>Доставка курьером</p>
              <span>
                Бесплатная доставка курьером осуществляется в следующие районы
                при заказе от 1000 рублей для ЦМР, ФМР, Репина,От 1500 рублей
                для ЮМР, СХА. Кожевенная, Старый центр,Стоимость доставки
                составляет 200 рублей.
              </span>
            </li>
            <li>
              <p>С собой со скидкой 10%</p>
              <span>
                Вы можете самостоятельно забрать заказ по адресу ул. Гаражная 92
                2 этаж.
              </span>
            </li>
          </ul>
        </div>
        <h1>Оплата</h1>
        <div className={del.delivery_wrapper_container}>
          <ul className={del.text_container}>
            <li>
              <p>Наличными курьеру</p>
              <span>
              При заказе - укажите с какой суммы вам необходима сдача.
              </span>
            </li>
            <li>
              <p>Банковской картой</p>
              <span>
              При оформлении на сайте или при получении у курьера.
              </span>
            </li>
          </ul>
        </div>


      </div>
      </AnimatedPage>
      <Footer />
    </div>

  );
}
