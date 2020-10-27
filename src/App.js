import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";
import HomePage from "./components/homeppage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

import React, { Component } from "react";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggle = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClick = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClick} />;
    }
    return (
      <div className="container-fluid b App" style={{ height: "100%" }}>
        <Toolbar drawerToggle={this.drawerToggle} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.backdropClick}
        />
        {backdrop}
        <h1>Navbar</h1>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>

        {/* <div className="row" style={{ marginTop: "6.4rem" }}>
          <div className="col-4">A</div>
          <div className="col-4">A</div>
          <div className="col-4">A</div>
        </div>
        <div className="row">
          <div className="col-3  col-sm-6">B</div>
          <div className="col-3  col-sm-6">B</div>
          <div className="col-3  col-sm-6">B</div>
          <div className="col-3  col-sm-6">B</div>
        </div> */}
      </div>
    );
  }
}

export default App;
