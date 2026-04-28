import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Tracking.css";

export default function Tracking() {
  const location = useLocation();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (location.state && location.state.from && location.state.to) {
      setStart(location.state.from);
      setEnd(location.state.to);
      generateRoute(location.state.from, location.state.to);
    }
  }, [location.state]);

  const generateRoute = (startVal = start, endVal = end) => {
    if (!startVal || !endVal) return;

    setRoute([
      { name: startVal, status: "completed" },
      { name: "Warehouse", status: "completed" },
      { name: "Transport Hub", status: "in-progress" },
      { name: endVal, status: "pending" }
    ]);
  };

  return (
    <div className="tracking">
      <h2>Track Product</h2>

      {/* INPUTS */}
      <div className="tracking-form">
        <input
          placeholder="Start Point"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          placeholder="End Point"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <button onClick={() => generateRoute()}>Track</button>
      </div>

      {/* DASHBOARD FLOW */}
      <div className="tracking-flow">
        {route.map((step, i) => (
          <div key={i} className="step-container">
            
            <div className={`step ${step.status}`}>
              {step.name}
            </div>

            {i !== route.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}