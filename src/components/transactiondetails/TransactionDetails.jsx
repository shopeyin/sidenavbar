import React from "react";

function TransactionDetails() {
  return (
    <div className="row mt">
      <div className="col-md-3 b">
        <div class="card" style={{ width: "23rem" }}>
          <div class="card-body">
            <p class="card-text">Daily Transaction Volume </p>
            <p>2032</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 b">
        {" "}
        <div class="card" style={{ width: "23rem" }}>
          <div class="card-body">
            <p class="card-text">Daily Transaction Value </p>
            <p>
              {" "}
              <span>&#8358;</span>2032
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 b">
        {" "}
        <div class="card" style={{ width: "22rem" }}>
          <div class="card-body">
            <p class="card-text">Total Transaction Volume </p>
            <p>452,032</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 b">
        {" "}
        <div class="card" style={{ width: "23rem" }}>
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
  );
}

export default TransactionDetails;
