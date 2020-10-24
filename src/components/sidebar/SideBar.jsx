import React from "react";
import "./sidebar.style.scss";
function SideBar() {
  return (
    <div className="container">
      <div className="row">
        <button class="btn btn-success">GENERATE INVOICE</button>
      </div>
      <div className="row center b">Main</div>
      <div className="row center">Overview</div>
      <div className="row center"> Payments</div>
      <div className="row center">All payments</div>
      <div className="row center">All payments</div>
      <div className="row center">Reconcilled payments</div>
      <div className="row center ">Un - reconcilled payments</div>
      <div className="row center ">Un - reconcilled payments</div>
      <div className="row center">Manual settlement</div>
      <div className="row center">Orders</div>
      <div className="row center">Orders</div>
      <div className="row center">All orders</div>
      <div className="row center">Pending Orders</div>
      <div className="row center">Reconcilled orders</div>
      <div className="row center">Merchant Profile</div>
    </div>
  );
}

export default SideBar;
