import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";
import data from "./data/itemData";

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext({children}){
    // console.log(props);
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showModal,setShowModal] = useState(false);
  const [itemArr,setItemArr] = useState(data);
  
 

    const handleAdd = (index) => {
        let itemArrCopy = [...itemArr];
        itemArrCopy[index].quantity = itemArrCopy[index].quantity + 1;
        setItemArr([...itemArrCopy]);
    setTotal(itemArr.reduce((acc,item)=>(acc+item.price*item.quantity),0));
    setItem(itemArr.reduce((acc,item)=>(acc+item.quantity),0));
  }

  const handleRemove = (index) => {
       let itemArrCopy = [...itemArr];
       if(itemArrCopy[index].quantity > 0)
        itemArrCopy[index].quantity = itemArrCopy[index].quantity - 1;
        setItemArr([...itemArrCopy]);
        setTotal(itemArr.reduce((acc,item)=>(acc+item.price*item.quantity),0));
    setItem(itemArr.reduce((acc,item)=>(acc+item.quantity),0));
    // if(total > 0){
    // setTotal((prevTotal)=>prevTotal-price);
    // }
    // if(item>0){
    //  setItem((prevItem)=>prevItem-1);
    // }
  }

  const resetButton = () => {
    setTotal(0);
    setItem(0);
    let itemArrCopy = [...itemArr];
    itemArrCopy.map((item)=>{item.quantity=0; return item;});
    setItemArr([...itemArrCopy]);
  }

    return(
        <itemContext.Provider value={{total,item,handleAdd,handleRemove,resetButton,itemArr,setShowModal}}>
            {showModal && <CartModal/>}
            {children}
        </itemContext.Provider>
    )
}

export {itemContext, useValue};
export default CustomItemContext;