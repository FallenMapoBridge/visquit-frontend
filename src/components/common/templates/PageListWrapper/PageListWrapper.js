import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 75
  }
}))

const PageListWrapper = (props) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
    {
      props.items.map((item) => props.children(item))
    }
    </Grid>
  )
}

export default PageListWrapper
