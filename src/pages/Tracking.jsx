import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "./Tracking.css";

export default function Tracking() {
  const location = useLocation();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [route, setRoute] = useState([]);

  const generateRoute = useCallback((startVal, endVal) => {
    if (!startVal || !endVal) return;

    setRoute([
      { name: startVal, status: "completed" },
      { name: "Warehouse", status: "completed" },
      { name: "Transport Hub", status: "in-progress" },
      { name: endVal, status: "pending" }
    ]);
  }, []);

  useEffect(() => {
    if (location.state?.from && location.state?.to) {
      setStart(location.state.from);
      setEnd(location.state.to);
      generateRoute(location.state.from, location.state.to);
    }
  }, [location.state, generateRoute]);

  return (
    <div className="tracking">
      <h2>Track Product</h2>

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
        <button onClick={() => generateRoute(start, end)}>Track</button>
      </div>

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