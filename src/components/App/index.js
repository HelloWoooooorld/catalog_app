import React from "react";
import Loader from "react-loader-spinner";
import Navbar from '../Navbar'
import Routes from '../../Routes'
import ProductList from '../ProductList'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./app.css";
function App() {
  return (
    <>
      <Navbar />
      <ProductList/>
      <Routes/>
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
