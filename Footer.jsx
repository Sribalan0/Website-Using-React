import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer
    style={{
      color: "black",
      padding: "40px 20px",
      marginTop: "40px",
      backgroundColor: "#f8f8f8",
    }}
  >
    {/* Logo / Title */}
    <h1
      style={{
        textAlign: "center",
        fontFamily: "'Playfair Display', Georgia, serif",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: "36px",
        color: "red",
      }}
    >
      IndiaRetailing<br />.com
    </h1>

    {/* Grid Sections */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        cursor:"pointer"
      }}
    >
      {/* Column 1 */}
      <div>
        <h3>About Us</h3>
        <p>About IndiaRetailing.com</p>
        <p>Meet the team</p>
        <p>Advertise with us</p>
        <p>Contact us</p>
      </div>

      {/* Column 2 */}
      <div>
        <h3>Categories</h3>
        <p>Fashion & Lifestyle</p>
        <p>Beauty & Wellness</p>
        <p>Food & Beverage</p>
        <p>Consumer Durables & IT</p>
        <p>Home Décor & Furnishing</p>
        <p>Specialty Retail</p>
        <p>Shopping Centers</p>
        <p>Entertainment</p>
      </div>

      {/* Column 3 */}
      <div>
        <h3>Features & Events</h3>
        <p>Leaders Ink</p>
        <p>India Food Forum</p>
        <p>Phygital Retail Convention</p>
        <p>Internet Commerce Summit</p>
        <p>India D2C Summit & Awards</p>
      </div>

      {/* Column 4 */}
      <div>
        <h3>Publications</h3>
        <p>Magazines</p>
        <p>Yearbooks</p>
        <p>The Store</p>
        <p>Other publications</p>
        <p>IR Prime Subscription</p>
        <p>Retail with Rasul Bailay</p>
        <p>IR Studio</p>
      </div>

      {/* Column 5 */}
      <div>
        <h3>Corporate Offices</h3>
        <p>
          <strong>New Delhi</strong><br />
          Images Multimedia Ltd.<br />
          S-61 A, Pocket S, Okhla Phase II,<br />
          Okhla Industrial Estate,<br />
          New Delhi, Delhi 110020
        </p>
        <p>
          <strong>Mumbai</strong><br />
          E 519, Floral Deck Plaza,<br />
          Central MIDC Road, Opp. SEEPZ,<br />
          Andheri (East), Mumbai 400093
        </p>
      </div>

      {/* Column 6 */}
      <div>
        <h3>Contact</h3>
        <p>📞 +91-9867355551</p>
        <p>✉️ editor@indiaretailing.com</p>
        <h3>Follow Us</h3>
        <div
          style={{
            display: "flex",
            gap: "15px",
            fontSize: "24px",
            marginTop: "10px",
          }}
        >
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook color="#4267B2" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter color="#1DA1F2" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin color="#0077B5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram color="#E4405F" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube color="red" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div
      style={{
        borderTop: "1px solid #444",
        marginTop: "30px",
        paddingTop: "15px",
        textAlign: "center",
        fontSize: "14px",
      }}
    >
      Copyright © {new Date().getFullYear()} Indiaretailing.com. All Rights
      Reserved.
    </div>
  </footer>
);

export default Footer;
