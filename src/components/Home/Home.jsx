import React from "react";
import Header from "../Header/Header";
import First from "../First/First";
import Second from "../Second/Second";
import Footer from "../Footer/Footer";
import ho from "../Home/Home.module.css";
import ItemBase from "../ItemBase/ItemBase";
import ItemBase2 from "../ItemBase2/ItemBase2";

export default function Home() {
  return (
    <div>
      <Header />
      <First />
      <Second />
      <div className={ho.main_card}>
        <div className={ho.main_card_wrapper} id = "cold">
          <h1>Холодные ролы</h1>
          <ItemBase />
          <div className={ho.baked_wrapper} id = "baked">
          <h1>Запеченые ролы</h1>
          <ItemBase2 />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
