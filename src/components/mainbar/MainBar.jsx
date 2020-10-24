import React from "react";
import TransactionDetails from "../transactiondetails/TransactionDetails";
import "./main.style.scss";
function MainBar() {
  return (
    <div className="container ">
      <TransactionDetails />

      <div className="row mt">
        <div className="col-md-8 b">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 b">
          <div className="row">
            <div className="col-md-12">
              {" "}
              <div class="card" style={{ width: "32rem" }}>
                <div class="card-body">
                  <p class="card-text">Total Transaction Value </p>
                  <p>
                    {" "}
                    <span>&#8358;</span>4,000,000
                  </p>
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
                  <p class="card-text">Total Transaction Value </p>
                  <p>
                    {" "}
                    <span>&#8358;</span>4,000,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBar;
