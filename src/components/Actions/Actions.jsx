import React from "react";
import Header from "../Header/Header";
import First from "../First/First";
import ac from "../Actions/Actions.module.css";
import Footer from "../Footer/Footer";
import baner  from "../../img/baner1.webp";
import baner2  from "../../img/baner2.webp";
import AnimatedPage from "../AnimatedPages";


export default function Actions() {
  return (
    <div>
      <Header />
      <First />
     <AnimatedPage>
      <div className={ac.action_wrapper}>
        <h1>Акции</h1>
        <div className={ac.action_wrapper__flex}>
          <div className={ac.action_wrapper__flex_mini}>
           <img src={baner2} alt="baner" />
           <img src={baner} alt="baner" />
          </div>
          <div className={ac.action_wrapper__flex_mini}>
           <img  src={baner} alt="baner" />
           <img  src={baner2} alt="baner" />
          </div>
        </div>

      </div>
      </AnimatedPage>
      <Footer />
    </div>
  );
}
