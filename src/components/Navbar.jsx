import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="navbar">
      
      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src="/logo.png" alt="logo" className="logo" />
        <h2>SupplyChain</h2>
      </div>

      {/* CENTER MENU */}
      <div className="nav-center">
        <Link to="/products">Products</Link>
        <Link to="/industries">Industries</Link>
        <Link to="/tracking">Track</Link>
        <Link to="/support">Support</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/routes">Routes</Link>
        <Link to="/about">About</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        
        {/* Search */}
        <div className="search-box">
          <FiSearch />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Country Flag */}
        <img
          src="https://flagcdn.com/w40/in.png"
          alt="India"
          className="flag"
        />

        {/* Profile */}
        <FaUserCircle className="profile-icon" />
      </div>
    </nav>
  );
}