import Navbar from "../components/Navbar";
import "./Dashboard.css";
import { FaBox, FaTruck, FaWarehouse, FaShippingFast } from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        {/* HEADER */}
        <h1>Dashboard</h1>
        <p className="subtitle">Overview of your supply chain system</p>

        {/* STATS */}
        <div className="stats">
          <div className="stat-card">
            <FaBox className="icon blue" />
            <h3>120</h3>
            <p>Total Products</p>
          </div>

          <div className="stat-card">
            <FaTruck className="icon green" />
            <h3>45</h3>
            <p>Active Shipments</p>
          </div>

          <div className="stat-card">
            <FaWarehouse className="icon orange" />
            <h3>8</h3>
            <p>Warehouses</p>
          </div>

          <div className="stat-card">
            <FaShippingFast className="icon purple" />
            <h3>30</h3>
            <p>Delivered Orders</p>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="actions">
          <div className="action-card">
            <h3>Track Shipment</h3>
            <p>Track your product in real-time</p>
            <button>Track Now</button>
          </div>

          <div className="action-card">
            <h3>Add Product</h3>
            <p>Manage your inventory</p>
            <button>Add Product</button>
          </div>

          <div className="action-card">
            <h3>View Routes</h3>
            <p>Check transport routes</p>
            <button>Explore</button>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="activity">
          <h2>Recent Activity</h2>

          <ul>
            <li>📦 Order shipped from Nagpur → Mumbai</li>
            <li>🚚 New route added (Delhi → Bangalore)</li>
            <li>🏭 Warehouse stock updated</li>
            <li>✅ Delivery completed in 2 days</li>
          </ul>
        </div>

      </div>
    </>
  );
}