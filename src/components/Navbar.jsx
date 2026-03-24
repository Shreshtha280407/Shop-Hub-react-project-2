import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import useCart from "../hooks/useCart";

function Navbar() {

  // ✅ GET DATA FROM CONTEXT
  const { cartItems, wishlist } = useCart();

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">

      {/* LOGO */}
      <h1 className="text-2xl font-bold text-blue-600">
        ShopHub
      </h1>

      {/* NAV LINKS */}
      <div className="flex gap-8 text-gray-700 font-medium">
        
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "hover:text-blue-500"
          }
        >
          Products
        </NavLink>

        {/* ❤️ WISHLIST LINK */}
        <NavLink 
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "hover:text-blue-500"
          }
        >
          Wishlist
        </NavLink>

      </div>

      {/* ICONS */}
      <div className="flex items-center gap-6 text-xl text-gray-700">

        {/* ❤️ WISHLIST ICON */}
        <Link to="/wishlist" className="relative">
          <FaHeart className="cursor-pointer hover:text-red-500" />

          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {wishlist.length}
            </span>
          )}
        </Link>

        {/* 🛒 CART ICON */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="cursor-pointer hover:text-blue-600" />

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
