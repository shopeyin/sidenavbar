import React from "react";
import "./calenderorder.style.scss";
function CalenderOrder() {
  return (
    <div className="row mt">
      <div className="col-md-8 b">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 b">
        <div className="row mb-2">
          <div className="col-md-12">
            {" "}
            <div class="card" style={{ width: "32rem" }}>
              <div class="card-body">
                <h4>Orders</h4>
                <p>bar-----------------</p>
                <p>Pending Orders:80</p>
                <p>Total Orders:100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="col-md-12">
            {" "}
            <div class="card" style={{ width: "32rem" }}>
              <div class="card-body">
                <h5>Payments</h5>

                <p>bar-----------------</p>
                <p>Un-reconcilled Payments:80</p>
                <p>Reconcilled Payments:100</p>
                <p>Total Payments:100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderOrder;
