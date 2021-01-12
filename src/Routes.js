import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login'
import Registration from './components/Registration'

function Routes() {
  return (
    <Router>
    <Switch>
      {/* <Route path='/' exact component={ProductList} /> */}
      <Route path='/login' component={Login} />
      <Route path='/auth' component={Registration} />
      {/* <Route path='/addProduct' component={AddProduct} />
      <Route path='/edit/:id' component={Edit} /> */}
    </Switch>
  </Router>
  )
}

export default Routes