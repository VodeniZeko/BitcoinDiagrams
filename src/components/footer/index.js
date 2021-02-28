import React from "react";

import "./footer.css";
import Player from "../../utils/music/Player";

function Footer(props) {
  return (
    <div className="footer">
      <Player />{" "}
    </div>
  );
}

export default Footer;
