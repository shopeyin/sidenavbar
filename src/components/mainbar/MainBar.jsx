import React from "react";
import TransactionDetails from "../transactiondetails/TransactionDetails";
import CalenderOrder from "../calenderOrder/CalenderOrder";
import "./main.style.scss";
function MainBar() {
  return (
    <div className="container ">
      <TransactionDetails />
      <CalenderOrder />
      <div className="row">
        <div className="col-md-12">
          <h2>Payments</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">Showing</div>
        <div className="col-md-2">20</div>
        <div className="col-md-2">Out of 500 payments</div>
        <div className="col-md-4">Search payments</div>
        <div className="col-md-2">Show</div>
      </div>
      <div className="row">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-success">Pending</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button className="btn btn-success">Pending</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button className="btn btn-success">Pending</button>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <td>
                <button className="btn btn-success">Pending</button>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-success">Pending</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button className="btn btn-success">Pending</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button className="btn btn-success">Pending</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainBar;
