import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    // For now, just simulate order placing
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <h2 className="text-center text-green-600 mt-20">
        Order placed successfully! 🎉
      </h2>
    );
  }

  if (cartItems.length === 0) {
    return <p className="text-center mt-20">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
      <ul className="mb-6">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>
              {item.title} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg mb-6">
        Total: ${totalPrice.toFixed(2)}
      </div>
      <button
        onClick={handlePlaceOrder}
        className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 w-full"
      >
        Place Order
      </button>
    </div>
  );
}
