import React from "react";
import SideBar from "../sidebar/SideBar";
import MainBar from "../mainbar/MainBar";
import "./body.style.scss";
function Body() {
  return (
    <div className="row">
      <div className="col-md-2 sidebar p">
        <SideBar />
      </div>
      <div className="col-md-10">
        <MainBar />
      </div>
    </div>
  );
}

export default Body;
