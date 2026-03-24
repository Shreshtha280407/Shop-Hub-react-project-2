import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  // ✅ EMPTY CHECK
  if (cartItems.length === 0) {
    return (
      <h2 className="p-10 text-center text-xl">
        🛒 No items to checkout
      </h2>
    );
  }

  // ✅ CALCULATIONS
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="p-10 bg-gray-50 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">
        Checkout
      </h1>

      <div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">

        {/* ITEMS */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.title} × {item.quantity}
              </span>
              <span>
                ₹ {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <hr className="mb-4" />

        {/* SUMMARY */}
        <div className="space-y-2 text-gray-700">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax (18%)</span>
            <span>₹ {tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>

        </div>

        {/* BUTTON */}
        <button
          onClick={() => alert("Order Placed Successfully 🎉")}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Place Order
        </button>

      </div>
    </div>
  );
}

export default Checkout;