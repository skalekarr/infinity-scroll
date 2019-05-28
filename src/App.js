import React from 'react';
import List from './components/list';
import Detail from './components/detail';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const routing = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/details/:productId/:total" component={Detail} />
    </Switch>
  </BrowserRouter>
)

export default routing;
