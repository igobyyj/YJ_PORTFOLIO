import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Love from "./pages/Detail/love/Love";
import Message from "./pages/Detail/message/Message";
import Toilet from "./pages/Detail/toilet/Toilet";
import Beauty from "./pages/Detail/beauty/Beauty";
import Binary from "./pages/Detail/binary/Binary";
import Carrot from "./pages/Detail/carrot/Carrot";
import List from "./pages/Main/List";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/love" component={Love} />
          <Route exact path="/message" component={Message} />
          <Route exact path="/toilet" component={Toilet} />
          <Route exact path="/beauty" component={Beauty} />
          <Route exact path="/binary" component={Binary} />
          <Route exact path="/carrot" component={Carrot} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
