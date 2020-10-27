import React from "react";
import "../SideDrawer/DrawerToggleBtn";
import "./toolbar.scss";
import DrawerToggleBtn from "../SideDrawer/DrawerToggleBtn";
function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          {" "}
          <DrawerToggleBtn click={props.drawerToggle}/>{" "}
        </div>
        <div className="toolbar__logo">
          <a href="#">LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              {" "}
              <a href="/">Products</a>
            </li>
            <li>
              {" "}
              <a href="/">User</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
