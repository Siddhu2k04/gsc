import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1>About Us</h1>

      <p>
        This Supply Chain Management System is designed to track products from
        source to delivery. It helps businesses manage suppliers, warehouses,
        transport routes, and deliveries efficiently.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>📦 Products</h3>
          <p>Manage raw materials and finished goods.</p>
        </div>

        <div className="about-card">
          <h3>🚚 Transport</h3>
          <p>Track routes via land, air, and sea.</p>
        </div>

        <div className="about-card">
          <h3>📍 Tracking</h3>
          <p>Monitor product movement in real-time.</p>
        </div>

        <div className="about-card">
          <h3>🏭 Suppliers</h3>
          <p>Connect with suppliers and partners.</p>
        </div>
      </div>

      <div className="about-footer">
        <p>© 2026 SupplyChain System | Built with React</p>
      </div>
    </div>
  );
}