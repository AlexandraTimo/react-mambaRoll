import React from "react";
import data_coldRoll from "../../data_coldRoll";
import Itemcard3 from "../ITEMCARD3/Itemcard3";
import it from "../ItemBase/ItemBase.module.css"
const ItemBase = () => {
  return (
    <>
      <div className={it.cardItemContainer}>
      {data_coldRoll.productData.map((item, index) => {
            return (
              <Itemcard3
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                weight = {item.weight}
                item={item}
                key={index}
              />
            );
          })}
      </div>
    </>
  );
};

export default ItemBase;