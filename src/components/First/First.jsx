import fr from "./First.module.css";
import React from "react";
import { NavLink } from "react-router-dom";


export default function First(props) {
  return (
    <div className={fr.first}>
      <div className={fr.first__wrapper}>
        <ul className={fr.menu_list}>
          <li className={fr.first__list_li}>
            <a href="#" className={fr.men_link} >
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
            </a>
            <ul className={fr.first_wrapper_submenu}>
              <li>
                <NavLink to="#" activeStyle={{ color: "red" }}>
                  Холодные ролы
                </NavLink>
              </li>
              <li>
                <NavLink to="#">Запеченые ролы</NavLink>
              </li>
              <li>
                <NavLink to="#">Темпура ролы</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Сеты</a>
          </li>
          <li>
            <a href="#">Суши</a>
          </li>
          <li>
            <a href="#">Маки</a>
          </li>
          <li>
            <a href="#">WOK</a>
          </li>
          <li>
            <a href="#">Супы</a>
          </li>
          <li>
            <a href="#">Закуски</a>
          </li>
          <li>
            <a href="#">Салаты</a>
          </li>
          <li>
            <a href="#">Напитки</a>
          </li>
          <li className={fr.first__list_li}>
            <a href="#" className={fr.men_link} >
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
            </a>
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
