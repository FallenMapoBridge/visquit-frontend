import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, Menu } from '../pages'

// catalog for all routings
const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </div>
  )
}

export default App
