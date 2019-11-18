import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
  root: {
    marginBottom: 10
  }
})

const Header = (props) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.root} color="primary" position="static">
      <Toolbar>
        <TypoGraphy variant="h4"
          color="inherit"
        >
          VISQUIT PoS
       </TypoGraphy>
      </Toolbar>
    </AppBar>
  )
}

export default Header
