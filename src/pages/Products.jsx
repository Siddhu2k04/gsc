import { useState } from "react";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([
    { name: "Paracetamol", category: "Pharmaceutical" },
    { name: "Mobile Chip", category: "Electronics" },
    { name: "Iron Ore", category: "Raw Material" },
    { name: "Steel Rod", category: "Finished Product" }
  ]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Pharmaceutical");

  const addProduct = () => {
    if (!name) return;
    setProducts([...products, { name, category }]);
    setName("");
  };

  const handleBuy = (product) => {
    alert(`Buying ${product.name}`);
  };

  const handleTry = (product) => {
    alert(`Requesting demo for ${product.name}`);
  };

  return (
    <div className="products">
      <h2>Products</h2>

      {/* ADD PRODUCT */}
      <div className="product-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Pharmaceutical</option>
          <option>Electronics</option>
          <option>Raw Material</option>
          <option>Finished Product</option>
        </select>

        <button onClick={addProduct}>Add</button>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-list">
        {products.map((p, i) => (
          <div
            key={i}
            className={`product-card ${p.category.replace(" ", "")}`}
          >
            <h4>{p.name}</h4>
            <p>{p.category}</p>

            {/* ACTION BUTTONS */}
            <div className="product-actions">
              <button className="buy-btn" onClick={() => handleBuy(p)}>
                Buy Now
              </button>
              <button className="try-btn" onClick={() => handleTry(p)}>
                Try Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}