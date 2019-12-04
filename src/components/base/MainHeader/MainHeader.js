import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    marginBottom: 10
  }
}))

const MainHeader = (props) => {
  const classes = useStyles()
  return (
    <AppBar
      className={classes.root}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <Typography variant="h4"
          color="inherit"
        >
          VISQUIT PoS
       </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MainHeader
