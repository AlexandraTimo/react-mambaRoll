import React from "react";
import { useCart } from "react-use-cart";
import Header from "../Header/Header";
import First from "../First/First";
import Footer from "../Footer/Footer";
import cart from "../Cart/Cart.module.css";
import CartEmpty from "../CartEmpty/CartEmpty";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPages";


const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <CartEmpty />;

  return (
    <div>
      <Header />
      <First />

      <AnimatedPage>
      <div className={cart.cart_wrapper}>
        <h1>Корзина</h1>
        <div className={cart.cart_wrapper_box}>
          <div className={cart.cart_wrapper_box_container}>
            {items.map((item, index) => {
              return (
                <div className={cart.cart_box} key={index}>
                  <div className={cart.cart_box_mini}>
                    <div className={cart.cart_box_image}>
                      <img
                        src={require("../../img/" + item.img + ".webp")}
                        alt={item.title}
                      />

                    </div>
                    <div className={cart.cart_title_continer}>
                    <p>{item.title}</p>
                      <p className={cart.price}> <span> {item.price}</span>  <span> ₽</span>  </p>
                    </div>
                  </div>

                  {/* <td>Quantity ({item.quantity})</td> */}
                  <div className={cart.cart_box_quantity}>
                    <div className={cart.cart_box_quantity_mini}>
                      <button
                        className={cart.cart_box_quantity_button}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <p className={cart.quantity}>
                        {item.quantity} {item.name}
                      </p>
                      <button
                        className={cart.cart_box_quantity_button}
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className={cart.cart_delete}>
                      <svg
                        onClick={() => removeItem(item.id)}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M10 11V17M14 11V17"
                          stroke="#D0D0D0"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* контейнер с итого */}
          <div className={cart.cart_wrapper_delivery_container}>
            <div className={cart.cart_delivery_cont}>
              <div className={cart.cart_total}>
                <span>Ваша корзина: </span>
                <span>{cartTotal} ₽ </span>
              </div>
              <div className={cart.cart_total_last}>
                <span> Товары:  ({totalUniqueItems}) </span>
                <span>{cartTotal} ₽</span>
              </div>
                {/* очистка корзины */}
              {/* <button onClick={() => emptyCart()}>Clear Cart</button> */}
              <Link to="/Checkout" className={cart.button_success}>Перейти к офомлению</Link>
            </div>

          </div>
        </div>
        {/* вывод общего количества товара */}
        {/* <h5>
          Cart ({totalUniqueItems}) total Items: ({totalItems})
        </h5> */}
      </div>
      </AnimatedPage>
      <Footer />
    </div>
  );
};

export default Cart;
