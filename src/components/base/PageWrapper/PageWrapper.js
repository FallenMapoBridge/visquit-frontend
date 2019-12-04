import React, { useState } from 'react'
import clsx from 'clsx'

import Sidebar from '../../sidebar'

import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const PageWrapper = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        {/* toolbar div element for top padding */}
        <div className={classes.toolbar} />
          {props.children}
      </main>
    </div>
  )
}

export default PageWrapper
