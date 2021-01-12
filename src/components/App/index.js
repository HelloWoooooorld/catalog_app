import React from "react";
import Loader from "react-loader-spinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import Login from "../Login";
import Registration from "../Registration";
import ProductList from "../ProductList";
import Edit from "../Edit";
import AddProduct from "../AddProduct";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./app.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/login" component={Login} />
          <Route path="/auth" component={Registration} />
          <Route path="/product" component={ProductList} />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </>
  );
}

export default App;
