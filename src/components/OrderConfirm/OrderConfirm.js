import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Header from "../Header/Header";
import First from "../First/First";
import Footer from "../Footer/Footer";
import AnimatedPage from "../AnimatedPages";
import SuccessModal from '../SuccesModal/SuccessModal';
import orc from "../OrderConfirm/OrderConfirm.module.css";


const OrderConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { emptyCart, items,cartTotal  } = useCart();
  const formData = location.state?.formData || {};

  const [showModal, setShowModal] = useState(false); // Состояние для отображения модального окна

  // Обработчик для закрытия модального окна
  const closeModal = () => {
    setShowModal(false);
    navigate('/'); // Переход на главную страницу или другую страницу по вашему выбору
  };

// Показываем модальное окно через 10 секунд после загрузки страницы
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('Модальное окно показано, корзина очищена');
    setShowModal(true);
  }, 10000); // 10000 миллисекунд = 10 секунд

  return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
}, [emptyCart]); // Пустой массив зависимостей для выполнения один раз при загрузке компонента

  return (
    <div>
         <Header />
         <First />
         <AnimatedPage>
           <div className={orc.orderConfirm_container}>
             <h1>Подтверждение заказа</h1>
      <p>Имя: {formData.firstName}</p>
      <p>Телефон: {formData.tel}</p>
      <p>Электронная почта: {formData.email}</p>
      <p>Улица: {formData.street}</p>
      <p>Дом: {formData.house}</p>
      <p>Квартира: {formData.apartment}</p>
      <p>Подъезд: {formData.entrance}</p>
      <p>Метод оплаты: {formData.paymentMethod === 'cash' ? 'Оплата наличными при получении' : 'Оплата картой при получении'}</p>
      <p>Сумма, с которой нужна сдача: {formData.changeAmount}</p>
      <p>Комментприи: {formData.comments}</p>

      {/* Другие поля формы */}

      <table>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
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
      {/* Показываем модальное окно, если showModal === true */}
      {showModal && <SuccessModal onClose={closeModal} />}
      </AnimatedPage>
      <Footer />
    </div>
  );
};

export default OrderConfirm;