import { useState } from "react";
import { useWishlistContext } from "../Context/WishlistContext";
import { productData } from "../utilities/data";

export function Wishlistbutton({ productId }) {
  const { wishlistItem, setWishlistItem } = useWishlistContext();

  const wishlistHandler = () => {
    wishlistItem.includes(productId)
      ? setWishlistItem(wishlistItem.filter((id) => id !== productId))
      : setWishlistItem([...wishlistItem, productId]);
  };
  return (
    <div className="wishlist-icon" onClick={wishlistHandler}>
      <i
        class="fa-solid fa-heart"
        style={{
          color: wishlistItem.includes(productId)
            ? "var(--color-accent)"
            : "black",
        }}
      ></i>
    </div>
  );
}
