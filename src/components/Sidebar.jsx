import React from "react";

function Sidebar({ image, bgColor }) {
  return (
    <section className="sidebar" style={{ background: bgColor }}>
      <img src={image} alt="" />
    </section>
  );
}

export default Sidebar;
