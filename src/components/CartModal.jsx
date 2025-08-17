import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../itemContext";

function CartModal() {
  const {itemArr,resetButton,item,total,setShowModal} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={()=>setShowModal(false)}>
        Close
      </div>
      <div className={styles.clearButton} onClick={resetButton}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {itemArr.map((item)=>(item.quantity>0?<div className={styles.cartCard}>
          <h3>{item.name}</h3> <h3>X{item.quantity}</h3>  <h3>{item.price * item.quantity}</h3>
        </div>:null))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total: {item}</div>
        <div className={styles.totalPrice}>$Price: {total}</div>
      </div>
    </div>
  );
}

export default CartModal;
