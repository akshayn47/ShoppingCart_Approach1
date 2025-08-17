import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";

function ItemCard({name, price, index}) {

  const {handleAdd,handleRemove} = useValue();

  // const handleAdd = () => {
  //   setTotal((prevTotal)=>prevTotal+price);
  //   setItem((prevItem)=>prevItem+1);
  // }

  // const handleRemove = () => {
  //   if(total > 0){
  //   setTotal((prevTotal)=>prevTotal-price);
  //   }
  //   if(item>0){
  //    setItem((prevItem)=>prevItem-1);
  //   }
  // }

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(index)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
