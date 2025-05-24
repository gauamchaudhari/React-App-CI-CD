import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain mb-4"
        />
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
      </Link>
      <p className="text-gray-700 font-bold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-grey-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
