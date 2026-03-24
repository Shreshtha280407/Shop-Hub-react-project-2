

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { getSingleProduct } from "../services/api";
import { formatPrice } from "../utils/helpers";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // ✅ USING CUSTOM HOOK
  const { addToCart, addToWishlist } = useCart();

  // ✅ API FROM SERVICES
useEffect(() => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
}, [id]);

  // ✅ LOADING STATE
  if (!product) {
    return <p className="p-10 text-center">Loading...</p>;
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>

          <p className="text-blue-600 uppercase text-sm">
            {product.category}
          </p>

          <h1 className="text-2xl font-bold mt-2">
            {product.title}
          </h1>

          <p className="mt-2 text-yellow-500">
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </p>

          {/* 💰 PRICE USING UTILS */}
          <p className="text-3xl font-bold mt-4">
            {formatPrice(product.price)}
          </p>

          <h3 className="mt-6 font-semibold">Description</h3>
          <p className="text-gray-600 mt-2">
            {product.description}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">

            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <button
              onClick={() => addToWishlist(product)}
              className="p-3 border rounded-lg hover:text-red-500"
            >
              <FaHeart />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;