import "./Header.css";
import logo from "../../img/logo.png";
import React, { useState } from "react";


export default function Header() {
  const [isOpen, setOpen] = useState(false);

 const burgerMenuOpen = ()=>{
  setOpen(true);
   }

   const burgerMenuClose = event => {
      // 👇️ toggle isActive state on click
      setOpen(current => !current);
    };

  return (
    <div className="header">
      <div className="header__body">
        <div className="header_container_menu">
          <img src={logo} alt="logo" />


          <nav className={`header__menu ${isOpen ? "active" : ""}  onClick = {burgerMenuClose}`}>
            <svg className="close" onClick={burgerMenuClose}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.1346 30.3656C32.2507 30.4818 32.3428 30.6196 32.4057 30.7714C32.4686 30.9231 32.5009 31.0858 32.5009 31.25C32.5009 31.4142 32.4686 31.5769 32.4057 31.7286C32.3428 31.8804 32.2507 32.0182 32.1346 32.1344C32.0184 32.2505 31.8806 32.3426 31.7288 32.4055C31.5771 32.4683 31.4145 32.5007 31.2502 32.5007C31.086 32.5007 30.9233 32.4683 30.7716 32.4055C30.6198 32.3426 30.482 32.2505 30.3658 32.1344L20.0002 21.7672L9.63458 32.1344C9.40003 32.3689 9.08191 32.5007 8.75021 32.5007C8.4185 32.5007 8.10038 32.3689 7.86583 32.1344C7.63128 31.8998 7.49951 31.5817 7.49951 31.25C7.49951 30.9183 7.63128 30.6002 7.86583 30.3656L18.233 20L7.86583 9.63437C7.63128 9.39982 7.49951 9.0817 7.49951 8.74999C7.49951 8.41829 7.63128 8.10017 7.86583 7.86562C8.10038 7.63107 8.4185 7.4993 8.75021 7.4993C9.08191 7.4993 9.40003 7.63107 9.63458 7.86562L20.0002 18.2328L30.3658 7.86562C30.6004 7.63107 30.9185 7.4993 31.2502 7.4993C31.5819 7.4993 31.9 7.63107 32.1346 7.86562C32.3691 8.10017 32.5009 8.41829 32.5009 8.74999C32.5009 9.0817 32.3691 9.39982 32.1346 9.63437L21.7674 20L32.1346 30.3656Z"
                fill="#A1A1A1"
              />
            </svg>

            <ul className="header_list">
              <li>
                <a className="phone__link" href="#">
                  Меню
                </a>
              </li>
              <li>
                <a href="#">Акции</a>
              </li>
              <li>
                <a href="#">О доставке</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>

        <a href="#" className="header_container_cart_tel_decstop">
          +7 861 945 28 28
        </a>

        <div className="header_container_cart">
          <a href="#" className="header_container_cart_tel">
            +7 861 945 28 28
          </a>
          <div class="header_burger" onClick={burgerMenuOpen}>
            <span></span>
          </div>
          <a href="#">
            <svg
              className="cart_svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.03 5.41667C14.4967 4.43333 15.5017 3.75 16.6667 3.75H23.3333C24.4967 3.75 25.5017 4.43333 25.97 5.41667C27.1083 5.42667 27.9967 5.47833 28.79 5.78833C29.737 6.15879 30.5607 6.78835 31.1667 7.605C31.7783 8.42667 32.065 9.48333 32.46 10.935L32.5217 11.1617L33.505 14.7733C34.1613 15.1032 34.7362 15.5745 35.1883 16.1533C36.225 17.4817 36.4083 19.0633 36.225 20.8767C36.045 22.6367 35.4917 24.8533 34.7983 27.6283L34.7533 27.8033C34.315 29.5583 33.9583 30.9833 33.5367 32.095C33.0933 33.255 32.5333 34.205 31.6083 34.9267C30.685 35.6483 29.6267 35.96 28.395 36.11C27.2133 36.25 25.745 36.25 23.9367 36.25H16.0633C14.255 36.25 12.785 36.25 11.605 36.1083C10.3717 35.9617 9.315 35.6483 8.39 34.925C7.46667 34.205 6.90667 33.255 6.46333 32.095C6.04 30.9833 5.685 29.5583 5.24667 27.8033L5.20167 27.6283C4.50833 24.8533 3.95333 22.6367 3.775 20.8783C3.59167 19.0617 3.775 17.4817 4.81 16.1533C5.28167 15.55 5.84667 15.1033 6.49333 14.7733L7.47667 11.1617L7.54 10.935C7.935 9.48333 8.22167 8.42667 8.83333 7.60333C9.43955 6.7873 10.2632 6.15833 11.21 5.78833C12.0033 5.47833 12.89 5.425 14.03 5.41667ZM14.0317 7.92167C12.9283 7.93333 12.4867 7.975 12.12 8.11833C11.6099 8.3178 11.1664 8.65685 10.84 9.09667C10.5467 9.49167 10.3733 10.0433 9.89 11.8217L9.3 13.9817C11.03 13.75 13.2633 13.75 16.0367 13.75H23.9617C26.7367 13.75 28.97 13.75 30.6983 13.9817L30.11 11.82C29.625 10.0417 29.4533 9.49 29.16 9.095C28.8336 8.65518 28.3901 8.31613 27.88 8.11667C27.5133 7.97333 27.07 7.93167 25.9667 7.92C25.7298 8.41777 25.3567 8.83821 24.8906 9.1326C24.4245 9.42699 23.8846 9.58327 23.3333 9.58333H16.6667C16.1154 9.58327 15.5755 9.42699 15.1094 9.1326C14.6433 8.83821 14.2702 8.41777 14.0333 7.92M16.6667 6.25C16.5562 6.25 16.4502 6.2939 16.372 6.37204C16.2939 6.45018 16.25 6.55616 16.25 6.66667C16.25 6.77717 16.2939 6.88315 16.372 6.96129C16.4502 7.03943 16.5562 7.08333 16.6667 7.08333H23.3333C23.4438 7.08333 23.5498 7.03943 23.628 6.96129C23.7061 6.88315 23.75 6.77717 23.75 6.66667C23.75 6.55616 23.7061 6.45018 23.628 6.37204C23.5498 6.2939 23.4438 6.25 23.3333 6.25H16.6667ZM9.5 16.4767C7.98333 16.6967 7.24833 17.0967 6.78333 17.6933C6.31667 18.2883 6.10833 19.0967 6.26333 20.6233C6.42167 22.1833 6.93 24.2233 7.65333 27.1233C8.11667 28.97 8.43667 30.25 8.80333 31.2067C9.15333 32.13 9.49833 32.6183 9.93167 32.9567C10.3633 33.2933 10.92 33.5083 11.9033 33.6267C12.92 33.7483 14.2367 33.75 16.1433 33.75H23.86C25.765 33.75 27.085 33.7483 28.1 33.6267C29.0833 33.51 29.64 33.2933 30.0717 32.9567C30.505 32.6183 30.8483 32.13 31.2017 31.2067C31.565 30.25 31.8867 28.97 32.3483 27.1233C33.0733 24.2233 33.5817 22.1833 33.7383 20.6233C33.895 19.0967 33.685 18.2867 33.22 17.6917C32.755 17.0967 32.02 16.6967 30.5017 16.4767C28.9517 16.2533 26.8483 16.25 23.86 16.25H16.1433C13.155 16.25 11.0517 16.2533 9.50167 16.4767"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
