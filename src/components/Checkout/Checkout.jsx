import React, { useEffect, useState,useCallback } from "react";
import { useCart } from "react-use-cart";
import Header from "../Header/Header";
import First from "../First/First";
import Footer from "../Footer/Footer";
import check from "../Checkout/checkout.module.css";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPages";

const Checkout = () => {
  const { items, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    tel: "",
    email: "",
    paymentMethod: "cash",
    changeAmount: "",
    comments: "",
    agreeToTerms: false,
    street: "",
    house: "",
    apartment: "",
    entrance: ""
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Имя обязательно";
    if (!formData.tel) newErrors.tel = "Телефон обязателен";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "Согласие обязательно";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData, validateForm]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setIsSubmitted(true);
    if (validateForm()) {
      navigate('/OrderConfirm', { state: {formData }});
    }
  };
  return (
    <>
      <div>
        <Header />
        <First />
        <AnimatedPage>
          <div className={check.checkContainer}>
            <h1>Оформление товара</h1>
            <div className={check.checkContainer_flex}>
              <div className={check.checkContainer_flex_info}>
                <p>Общие данные</p>
                <form className={check.form} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Имя*"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {isSubmitted && errors.firstName && (
                    <div className={check.error}>{errors.firstName}</div>
                  )}
                  <div className={check.form_flex}>
                    <input
                      type="text"
                      name="tel"
                      placeholder="+7 (9__) ___ __ __*"
                      value={formData.tel}
                      onChange={handleInputChange}
                    />
                    {isSubmitted && errors.tel && (
                      <div className={check.error}>{errors.tel}</div>
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder="Электронная почта*"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={check.deliveryContainer}>
                    <h2>Доставка по адресу:</h2>
                    <input
                      type="text"
                      name="street"
                      placeholder="Улица"
                      value={formData.street}
                      onChange={handleInputChange}
                    />

<div className={check.deliveryContainer_flex}>
<input
                      type="text"
                      name="house"
                      placeholder="Дом,корпус"
                      value={formData.house}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="apartment"
                      placeholder="Подъезд "
                      value={formData.apartment}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="entrance"
                      placeholder="Квартира"
                      value={formData.entrance}
                      onChange={handleInputChange}
                    />

</div>



                  </div>





                  <div className={check.checkContainer_flex_text}>
                    <h2>Самовывоз по адресу</h2>
                    <p>г. Краснодар, ул. Гаражная, 92</p>
                    <p>Время работы с 11:00 до 23:00</p>
                  </div>
                  <div className={check.radioContainer}>
                    <h2>Оплата:</h2>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={formData.paymentMethod === "cash"}
                          onChange={handleInputChange}
                        />
                        Оплата картой при получении
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === "card"}
                          onChange={handleInputChange}
                        />
                        Оплата наличными при получении
                      </label>
                    </div>
                  </div>
                  <div className={check.radioContainer_form_flex}>
                    <input
                      type="text"
                      name="changeAmount"
                      placeholder="Укажите сумму, с которой вам нужна сдача"
                      value={formData.changeAmount}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={check.radioContainer_form_flex}>
                    <textarea
                      name="comments"
                      placeholder="Введите комментарии"
                      value={formData.comments}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button
                    className={check.button_success}
                    type="submit"
                    disabled={!isFormValid}
                  >
                    Оформить заказ
                  </button>
                  <div className={check.checkboxContainer}>
                    <label>
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                      />
                      Я согласен на обработку данных
                    </label>
                    {isSubmitted && errors.agreeToTerms && (
                      <div className={check.error}>{errors.agreeToTerms}</div>
                    )}
                  </div>

                </form>
              </div>

              <div className={check.ul_items_div}>
                <p>Ваш заказ</p>
                <table>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className={check.td_image}>
                          <img
                            src={require(`../../img/${item.img}.webp`)}
                            alt={item.title}
                            className={check.itemImage}
                          />
                        </td>
                        <td className={check.itemTitle}>{item.title}</td>
                        <td>
                          {item.price}&#8381; x {item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">Итого</td>
                      <td>{cartTotal} &#8381;</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

          </div>
        </AnimatedPage>
        <Footer />
      </div>
    </>
  );
};

export default Checkout;