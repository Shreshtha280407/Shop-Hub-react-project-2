// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Wishlist() {
//   const { wishlistItems, removeFromWishlist } = useContext(CartContext);

//   return (
//     <div className="p-10">
//       <h2 className="text-2xl font-bold mb-6">Wishlist</h2>

//       {wishlistItems.length === 0 ? (
//         <p>No items in wishlist</p>
//       ) : (
//         wishlistItems.map((item) => (
//           <div key={item.id} className="flex justify-between border p-4 mb-4">
//             <p>{item.title}</p>

//             <button
//               onClick={() => removeFromWishlist(item.id)}
//               className="text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Wishlist;


import useCart from "../hooks/useCart";
import { FaTrash } from "react-icons/fa";

function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        Your wishlist is empty ❤️
      </div>
    );
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain"
              />

              <div>
                <h3 className="font-semibold line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {item.category}
                </p>
                <p className="font-bold mt-1">
                  $ {item.price}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              <button
                onClick={() => addToCart(item)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>

              <FaTrash
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-500 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;