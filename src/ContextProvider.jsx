import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export const ContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    //to add item into cart list
    const addToCart = (e, data) =>{
        e.preventDefault();
        setCart([...cart, data]);

        console.log({e, data})
    }
    // for remove items from cartlist
    const removeItem = (e, id) => {
        e.preventDefault();
        setCart(cart.filter((product) => product.id !== id));
        setTotal((value) => Math.floor((value - id.price )) )
    }

    // for total cost of the products added into the cart
    useEffect(() => {
            const subTotal = cart.reduce((sum, productItem) => sum + Math.floor(productItem.price), 0);
            setTotal (subTotal);
        },[cart])


    return(
        <MainContext.Provider value = {{cart, setCart, removeItem, addToCart, total}}>
            {children}
        </MainContext.Provider>
    )
}