import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  Home,
  Menu,
  OrdersPending,
  OrdersHistory,
  MenuEdit,
} from '../pages'

// catalog for all routings
const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/edit/new" component={MenuEdit} />
        <Route exact path="/menu/edit/:menuId" component={MenuEdit} />
        <Route exact path="/orders/pending" component={OrdersPending} />
        <Route exact path="/orders/history" component={OrdersHistory} />
      </Switch>
    </div>
  )
}

export default App
