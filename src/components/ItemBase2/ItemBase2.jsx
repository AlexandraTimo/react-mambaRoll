import React from "react";
import data_bakedRol from "../../data_bakedRoll";
import Itemcard3 from "../ITEMCARD3/Itemcard3";
import it from "../ItemBase/ItemBase.module.css"
const ItemBase2 = () => {
  return (
    <>
      <div className={it.cardItemContainer}>
      {data_bakedRol.productData.map((item, index) => {
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

export default ItemBase2;