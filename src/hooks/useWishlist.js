import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function useWishlist() {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(CartContext);

  return { wishlistItems, addToWishlist, removeFromWishlist };
}

export default useWishlist;