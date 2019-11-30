import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  Home,
  Menu,
  OrdersPending
} from '../pages'

// catalog for all routings
const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/orders/pending" component={OrdersPending} />
      </Switch>
    </div>
  )
}

export default App
