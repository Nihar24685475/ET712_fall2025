import { Link } from "react-router-dom";
import "../App.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo">Moto</Link>
        <span className="logo2">Max</span>
      </div>

      <div className="nav-links">
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/shop">Shop</Link>
        <Link className="nav-btn cart-btn" to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
