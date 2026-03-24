import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  //  ADD TO CART
  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      const updated = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updated);
      toast.info("Quantity increased 🛒");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success("Added to cart 🛒");
    }

    //  REMOVE FROM WISHLIST IF PRESENT
    setWishlist((prev) =>
      prev.filter((item) => item.id !== product.id)
    );
  };

  //  REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Removed from cart ❌");
  };

  //  INCREASE QTY
  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updated);
  };

  //  DECREASE QTY
  const decreaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
  };

  //  ADD TO WISHLIST
  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist ❤️");
    } else {
      toast.info("Already in wishlist ❤️");
    }
  };

  //  REMOVE FROM WISHLIST
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    toast.error("Removed from wishlist ❌");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlist,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
