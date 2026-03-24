import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart, addToWishlist } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition duration-300 relative">
      
      {/* ❤️ Wishlist */}
      <div
        onClick={() => addToWishlist(product)}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer hover:text-red-500"
      >
        <FaHeart />
      </div>

      {/* 🖼 Image (click → details page) */}
      <div
        className="h-40 flex items-center justify-center cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Category */}
      <p className="text-blue-600 text-xs mt-3 uppercase">
        {product.category}
      </p>

      {/* Title (click → details page) */}
      <h3
        onClick={() => navigate(`/products/${product.id}`)}
        className="font-semibold mt-1 cursor-pointer hover:text-blue-600"
      >
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-lg font-bold mt-2">
        ₹ {product.price}
      </p>

      {/* 🛒 Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;