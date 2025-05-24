import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, incrementQty, decrementQty } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => decrementQty(item.id)}
                      className="bg-gray-300 px-2 rounded"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => incrementQty(item.id)}
                      className="bg-gray-300 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
          <button
            onClick={clearCart}
            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
