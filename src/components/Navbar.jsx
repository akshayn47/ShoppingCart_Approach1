import React from "react";
import styles from "../styles/Navbar.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const {total,item,resetButton,setShowModal} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className="buttonsWrapper"> 
      <button className={styles.button} onClick={()=>setShowModal(true)}>Cart</button>
      <button className={styles.button} onClick={resetButton}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
