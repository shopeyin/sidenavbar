import React from "react";
import "./sidedrawer.scss";
import { Link, NavLink } from "react-router-dom";
function SideDrawer(props) {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="close-btn" onClick={props.click}>
        {" "}
        &times;
      </div>
      <ul>
        <li>
          <Link
            className="navigation__link"
            onClick={props.click}
            to="/contact"
          >
            contact
          </Link>
        </li>
        <li>
          <Link className="navigation__link" onClick={props.click} to="/">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideDrawer;
