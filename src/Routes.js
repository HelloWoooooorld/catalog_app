import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/Registration";
import ProductList from "./components/ProductList";
import App from "./components/App";
import Edit from "./components/Edit";
import AddProduct from "./components/AddProduct";

function Routes() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/products" exact component={ProductList} />
          <Route path="/login" component={Login} />
          <Route path="/auth" component={Registration} />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
  );
}

export default Routes;
