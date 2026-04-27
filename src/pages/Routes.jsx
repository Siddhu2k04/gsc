import { useState } from "react";
import "./Routes.css";
import { FaTruck, FaPlane, FaShip } from "react-icons/fa";

export default function Routes() {
  const [routes] = useState([
    {
      id: 1,
      type: "Land",
      from: "Nagpur",
      to: "Mumbai",
      time: "12 hrs",
      cost: "₹5000"
    },
    {
      id: 2,
      type: "Air",
      from: "Delhi",
      to: "Bangalore",
      time: "2 hrs",
      cost: "₹15000"
    },
    {
      id: 3,
      type: "Sea",
      from: "Mumbai Port",
      to: "Dubai",
      time: "5 days",
      cost: "₹30000"
    }
  ]);

  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredRoutes =
    filter === "All"
      ? routes
      : routes.filter((r) => r.type === filter);

  // Icon function (clean method)
  const getIcon = (type) => {
    if (type === "Land") return <FaTruck />;
    if (type === "Air") return <FaPlane />;
    if (type === "Sea") return <FaShip />;
  };

  return (
    <div className="routes">
      <h2>Transport Routes</h2>

      {/* FILTER */}
      <div className="route-filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Land")}>Land</button>
        <button onClick={() => setFilter("Air")}>Air</button>
        <button onClick={() => setFilter("Sea")}>Sea</button>
      </div>

      {/* ROUTE LIST */}
      <div className="route-list">
        {filteredRoutes.map((route) => (
          <div key={route.id} className={`route-card ${route.type}`}>

            {/* TITLE WITH ICON */}
            <h3 className="route-title">
              {getIcon(route.type)} {route.type} Transport
            </h3>

            <p><strong>From:</strong> {route.from}</p>
            <p><strong>To:</strong> {route.to}</p>
            <p><strong>Time:</strong> {route.time}</p>
            <p><strong>Cost:</strong> {route.cost}</p>

            <button className="select-btn">Select Route</button>
          </div>
        ))}
      </div>
    </div>
  );
}