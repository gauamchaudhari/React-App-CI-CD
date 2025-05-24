import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Ecommserce Site</h1>
      <div>
        <Link to="/" className="mr-4 hover:underline">
          Home
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        <Link to="/checkout" className="ml-4 hover:underline">
          Checkout
        </Link>
      </div>
    </nav>
  );
}
