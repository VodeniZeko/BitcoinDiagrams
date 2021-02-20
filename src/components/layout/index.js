import React from "react";
import Top from "../top";
import Footer from "../footer";
import "./container.css";

function layout({ children }) {
  return (
    <div className="container">
      <Top />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
