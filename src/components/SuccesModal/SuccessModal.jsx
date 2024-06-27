import React, { useEffect } from 'react';
import succ from "../SuccesModal/SuccessModal.module.css";

const SuccessModal = ({ onClose }) => {
    useEffect(() => {
       const timer = setTimeout(() => {
          onClose(); // Закрываем модальное окно через 10 секунд
        }, 10000); // 10000 миллисекунд = 10 секунд

        return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
      }, [onClose]);
  return (
    <div className={succ.modalBackground}>
      <div className={succ.modalContent}>
        <h2>Заказ успешно оформлен!</h2>
        <p>Спасибо за ваш заказ.</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default SuccessModal;