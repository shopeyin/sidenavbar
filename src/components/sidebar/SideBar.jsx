import React from "react";
import "./sidebar.style.scss";
function SideBar() {
  return (
    <div className="container">
      <div className="row mt center">
        <button class="btn btn-success btnn">GENERATE INVOICE</button>
      </div>
      <div className="row center mt">Main</div>
      <div className="row center">Overview</div>
      <div className="row center mt"> Payments</div>
      <div className="row center">All payments</div>
      <div className="row center">All payments</div>
      <div className="row center">Reconcilled payments</div>
      <div className="row center ">Un - reconcilled payments</div>
      <div className="row center ">Un - reconcilled payments</div>
      <div className="row center">Manual settlement</div>
      <div className="row center mt">Orders</div>

      <div className="row center">All orders</div>
      <div className="row center">Pending Orders</div>
      <div className="row center">Reconcilled orders</div>
      <div className="row center mt">Merchant Profile</div>
    </div>
  );
}

export default SideBar;
