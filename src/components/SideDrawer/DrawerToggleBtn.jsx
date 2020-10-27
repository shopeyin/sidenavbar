import React from "react";
import "./drawer.style.scss";
function DrawerToggleBtn(props) {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
}

export default DrawerToggleBtn;
