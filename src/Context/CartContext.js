import { createContext, useContext , useReducer } from "react";


const CartContext = createContext();

 function handleCartItems (state , action) {
    switch (action.type) {
        case "HANDLE_CART":
         return (state = 
            {
        
        productsInCart: state.productsInCart.includes(action.payload) 
        ? state.productsInCart.filter((id)=> id !== action.payload) 
        : [...state.productsInCart , action.payload]
              
    }) ;
        
          default:
            return state;
    }
}


const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(handleCartItems , {
        productsInCart: []
    });
    return (
        <CartContext.Provider value = {{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext);  

export {CartProvider , useCartContext , handleCartItems};