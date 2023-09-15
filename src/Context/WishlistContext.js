import { createContext, useContext, useState } from "react";

const  WishlistContext = createContext();

const WishlistProvider = ({children}) => {
    const [wishlistItem , setWishlistItem] = useState([]);
    return (
        <WishlistContext.Provider value={{wishlistItem , setWishlistItem}}>
            {children}
        </WishlistContext.Provider>
    )
}


const useWishlistContext = () => useContext(WishlistContext);


export {WishlistProvider,useWishlistContext};