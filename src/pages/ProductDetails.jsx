import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-96 object-contain mx-auto"
      />
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
