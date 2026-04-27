import "./Industries.css";

export default function Industries() {
  const industries = [
    {
      name: "E-Commerce",
      desc: "Fast delivery, order tracking, and warehouse optimization.",
      icon: "🛒"
    },
    {
      name: "Pharmaceutical",
      desc: "Secure transport with temperature-controlled logistics.",
      icon: "💊"
    },
    {
      name: "Electronics",
      desc: "Safe handling of high-value and fragile goods.",
      icon: "💻"
    },
    {
      name: "Food & Agriculture",
      desc: "Fresh delivery with cold chain management.",
      icon: "🌾"
    },
    {
      name: "Automobile",
      desc: "Supply chain for parts and vehicle distribution.",
      icon: "🚗"
    },
    {
      name: "Retail",
      desc: "Inventory management and last-mile delivery.",
      icon: "🏬"
    }
  ];

  return (
    <div className="industries">
      <h1>Industries We Serve</h1>
      <p className="subtitle">
        Our supply chain system supports multiple industries with efficient logistics and tracking.
      </p>

      <div className="industry-list">
        {industries.map((ind, i) => (
          <div key={i} className="industry-card">
            <div className="icon">{ind.icon}</div>
            <h3>{ind.name}</h3>
            <p>{ind.desc}</p>

            <div className="industry-actions">
              <button className="explore-btn">Explore</button>
              <button className="contact-btn">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}