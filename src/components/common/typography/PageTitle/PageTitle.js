import React from 'react'

import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 200,
    marginBottom: '1.5rem'
  }
}))

const PageTitle = (props) => {
  const classes = useStyles()
  return (
    <Typography
      variant="h3"
      className={classes.title}
    >
      {props.children}
    </Typography>
  )
}

export default PageTitle
