import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="text-2xl font-semibold mb-6">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.length > 0 ? (
                    products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <p>Loading products...</p>
                  )}
                </div>
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
