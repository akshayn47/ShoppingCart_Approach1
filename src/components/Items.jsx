import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";
import { useValue } from "../itemContext";

function Items() {
  const {itemArr} = useValue();
  return (
    <div className={styles.wrapper}>
      {itemArr.map((item,i)=><ItemCard name={item.name} price={item.price} index={i}/>)}
    </div>
  );
}

export default Items;
