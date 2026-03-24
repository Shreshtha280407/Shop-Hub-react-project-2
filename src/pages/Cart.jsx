

// import { useParams } from "react-router-dom";
// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { CartContext } from "../context/CartContext";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";

// function ProductDetails() {
//   const { id } = useParams(); // get product id from URL
//   const [product, setProduct] = useState(null);

//   const { addToCart, addToWishlist } = useContext(CartContext);

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   if (!product) {
//     return <p className="p-10 text-center">Loading...</p>;
//   }

//   return (
//     <div className="p-10 bg-gray-50 min-h-screen">
//       <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

//         {/* IMAGE */}
//         <div className="flex items-center justify-center">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="h-80 object-contain"
//           />
//         </div>

//         {/* DETAILS */}
//         <div>
//           <p className="text-blue-600 uppercase text-sm">
//             {product.category}
//           </p>

//           <h1 className="text-2xl font-bold mt-2">
//             {product.title}
//           </h1>

//           <p className="mt-2 text-yellow-500">
//             ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
//           </p>

//           <p className="text-3xl font-bold mt-4">
//             $ {product.price}
//           </p>

//           <h3 className="mt-6 font-semibold">Description</h3>
//           <p className="text-gray-600 mt-2">
//             {product.description}
//           </p>

//           {/* BUTTONS */}
//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={() => addToCart(product)}
//               className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
//             >
//               <FaShoppingCart />
//               Add to Cart
//             </button>

//             <button
//               onClick={() => addToWishlist(product)}
//               className="p-3 border rounded-lg hover:text-red-500"
//             >
//               <FaHeart />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetails;


// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Cart() {
//   const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

//   // ✅ EMPTY CART
//   if (cartItems.length === 0) {
//     return (
//       <h2 className="p-10 text-center text-xl">
//         🛒 Your cart is empty
//       </h2>
//     );
//   }

//   return (
//     <div className="p-10 bg-gray-50 min-h-screen">

//       <h1 className="text-2xl font-bold mb-6">
//         Shopping Cart
//       </h1>

//       <div className="space-y-6">

//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
//           >

//             {/* LEFT */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-16"
//               />

//               <div>
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <p className="text-gray-600">₹ {item.price}</p>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="flex items-center gap-4">

//               {/* QUANTITY */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => decreaseQty(item.id)}
//                   className="px-2 bg-gray-200 rounded"
//                 >
//                   -
//                 </button>

//                 <span>{item.quantity}</span>

//                 <button
//                   onClick={() => increaseQty(item.id)}
//                   className="px-2 bg-gray-200 rounded"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* REMOVE */}
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500"
//               >
//                 Remove
//               </button>

//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// export default Cart;



import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  // ✅ EMPTY CART
  if (cartItems.length === 0) {
    return (
      <h2 className="p-10 text-center text-xl">
        🛒 Your cart is empty
      </h2>
    );
  }

  // ✅ CALCULATIONS
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* 🛒 LEFT SIDE (ITEMS) */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
            >

              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-16" />

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">₹ {item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                {/* QUANTITY */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* 💳 RIGHT SIDE (SUMMARY) */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">

          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-2 text-gray-700">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (18%)</span>
              <span>₹ {tax.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>

          </div>

          {/* CHECKOUT BUTTON */}
          <Link to="/checkout">
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Proceed to Checkout →
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Cart;