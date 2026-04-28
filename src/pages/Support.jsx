import "./Support.css";
import { FaHeadset, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Support() {
  return (
    <div className="support">
      <h1>Support Center</h1>
      <p className="subtitle">
        Need help? We're here to assist you with your supply chain operations.
      </p>

      {/* SUPPORT OPTIONS */}
      <div className="support-options">
        <div className="support-card">
          <FaHeadset className="icon" />
          <h3>Live Support</h3>
          <p>Chat with our support team in real-time.</p>
          <button onClick={() => alert("Chat started!")}>Start Chat</button>
        </div>

        <div className="support-card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p>Send your queries via email.</p>
          <button onClick={() => alert("Email client opened!")}>Send Email</button>
        </div>

        <div className="support-card">
          <FaPhone className="icon" />
          <h3>Call Support</h3>
          <p>Talk directly with our experts.</p>
          <button onClick={() => alert("Calling support!")}>Call Now</button>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h4>How to track my shipment?</h4>
          <p>Go to the tracking page and enter start and end location.</p>
        </div>

        <div className="faq-item">
          <h4>How to add products?</h4>
          <p>Visit the products page and click on "Add Product".</p>
        </div>

        <div className="faq-item">
          <h4>What transport modes are available?</h4>
          <p>We support land, air, and sea transport routes.</p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="contact-form">
        <h2>Contact Us</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button onClick={() => alert("Support request submitted!")}>Submit</button>
      </div>
    </div>
  );
}