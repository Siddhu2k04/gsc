import { useState, useEffect } from "react";
import api from "../services/api";
import "./Suppliers.css";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await api.get('suppliers/');
      setSuppliers(response.data);
    } catch (error) {
      console.error("Error fetching suppliers", error);
    }
  };

  return (
    <div className="suppliers-container">
      <h2>Suppliers</h2>
      <p>Manage sourcing: farmers, companies, NGOs</p>
      
      <div className="supplier-list">
        {suppliers.map(s => (
          <div key={s.id} className="supplier-card">
            <h4>{s.name}</h4>
            <p><strong>Type:</strong> {s.supplier_type}</p>
            <p><strong>Location:</strong> {s.location}</p>
            <p><strong>Contact:</strong> {s.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}