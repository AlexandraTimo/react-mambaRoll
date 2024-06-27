import fr from "./First.module.css";
import React, { useEffect } from "react";
import {NavLink, useLocation } from 'react-router-dom';


export default function First(props) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className={fr.first}>
      <div className={fr.first__wrapper}>
        <ul className={fr.menu_list}>
          <li className={fr.first__list_li}>
            <NavLink className={fr.men_link}>
              <span>Ролы</span>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6 5.29289L10.6464 0.646447C10.8417 0.451184 11.1583 0.451184 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.35355 6.35355C6.15829 6.54882 5.84171 6.54882 5.64645 6.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                  fill="#151515"
                />
              </svg>
            </NavLink>
            <ul className={fr.first_wrapper_submenu}>
              <li>
                <NavLink className={fr.link}  to="/Home#cold"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}>
                  Холодные ролы
                </NavLink>
              </li>
              <li>
                <NavLink className={fr.link}
                  to="/Home#baked"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Запеченые ролы
                </NavLink>
              </li>
              <li>
                <NavLink to="#">Темпура ролы</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">Сеты</NavLink>
          </li>
          <li>
            <NavLink to="#">Суши</NavLink>
          </li>
          <li>
            <NavLink to="#">Маки</NavLink>
          </li>
          <li>
            <NavLink to="#">WOK</NavLink>
          </li>
          <li>
            <NavLink to="#">Супы</NavLink>
          </li>
          <li>
            <NavLink to="#">Закуски</NavLink>
          </li>
          <li>
            <NavLink to="#">Салаты</NavLink>
          </li>
          <li>
            <NavLink to="#">Напитки</NavLink>
          </li>
          <li className={fr.first__list_li}>
            <NavLink href="#" className={fr.men_link}>
              <span>Дополнительно</span>
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6 5.29289L10.6464 0.646447C10.8417 0.451184 11.1583 0.451184 11.3536 0.646447C11.5488 0.841709 11.5488 1.15829 11.3536 1.35355L6.35355 6.35355C6.15829 6.54882 5.84171 6.54882 5.64645 6.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                  fill="#151515"
                />
              </svg>
            </NavLink>
            <ul className={fr.first_wrapper_submenu}>
              <li>
                <NavLink to="#" activeStyle={{ color: "red" }}>
                  Фитнес меню
                </NavLink>
              </li>
              <li>
                <NavLink to="#">Детское меню</NavLink>
              </li>
              <li>
                <NavLink to="#">Другое</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
