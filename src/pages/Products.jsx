import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Pharmaceutical");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('products/');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const addProduct = async () => {
    if (!name) return;
    try {
      const response = await api.post('products/', { name, category });
      setProducts([response.data, ...products]);
      setName("");
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  const handleBuy = (product) => {
    navigate('/routes');
  };

  const handleTry = (product) => {
    navigate('/routes');
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
        {products.map((p) => (
          <div
            key={p.id}
            className={`product-card ${p.category ? p.category.replace(" ", "") : ""}`}
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