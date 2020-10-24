import React from "react";
import SideBar from "../sidebar/SideBar";
import "./body.style.scss";
function Body() {
  return (
    <div className="row">
      <div className="col-md-2 sidebar p">
        <SideBar />
      </div>
      <div className="col-md-9">Main bar</div>
    </div>
  );
}

export default Body;
