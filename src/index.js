import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline'

import store from './redux'
import App from './pages/App'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
