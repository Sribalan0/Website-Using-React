import React from "react";
import banner from "../assets/Group 34165.png";
import nav from "../assets/div.tgmenu__wrap.png";
import nav2 from "../assets/Frame 427320667.png";
import nav3 from "../assets/Group 18947.png";
import nav4 from"../assets/Group 34619.png";
import nav5 from"../assets/Group 34618.png";
import nav6 from"../assets/Group 19032.png";
import nav7 from"../assets/Group 34325.png";
const Header = () => (
  <header
    style={{
      padding: 16,
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 0, 
      marginTop:-15// space between logo and banner
    }}
  >
   
    <img src={banner} alt="banner" style={{ height: 150,width:700 ,marginTop:0}} /> {/* bigger banner */}
   <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "12px 24px",
    backgroundColor: "#f5f5f5",
  }}
>
  {/* Left: Search */}
  <input
    type="search"
    placeholder="Search here..."
    style={{
      padding: "8px 12px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      outline: "none",
      width: "200px",
    }}
  />

  {/* Center: Heading */}
  <h1 style={{ margin: 0, textAlign: "center", fontStyle: "italic" }}>
    IndiaRetailing<span style={{ fontWeight: "normal" }}><br/>.com</span>
  </h1>

  {/* Right: Buttons */}
  <div style={{ display: "flex", gap: "8px" }}>
    <button
      type="button"
      style={{
        backgroundColor: "red",
        color: "#fff",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Subscribe
    </button>
    <button
      type="button"
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        cursor: "pointer",
        backgroundColor: "#fff",
      }}
    >
      Sign In
    </button>
  </div>
</div>

<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <img src={nav} alt="banner" style={{ height: 80, width: 1500 }} />
  <img src={nav2} alt="banner" style={{ height: 10, width: 1000,marginLeft:200 }} />
  <img src={nav3} alt="banner" style={{ height: 120, width: 1500 }} />
  <img src={nav4} alt="banner" style={{ height: 1200, width: 1000,marginLeft:36 }} />
   <img src={nav5} alt="banner" style={{ height: 1200, width: 1500}} />
    <img src={nav6} alt="banner" style={{ height: 100, width: 1500}} />
    <img src={nav7} alt="banner" style={{ height: 250, width: 1400,marginLeft:36,marginRight:36}} />
     </div>

     
  </header>
);

export default Header;
