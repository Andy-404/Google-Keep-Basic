import React from "react";

function Footer(props) {
  var d = new Date();
  var n = d.getFullYear();
  return (
    <div className="footer">
      <p>{`${n} © Say my name!`}</p>
    </div>
  );
}

export default Footer;
