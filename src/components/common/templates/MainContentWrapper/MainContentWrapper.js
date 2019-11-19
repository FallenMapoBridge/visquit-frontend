import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 75
  }
}))

const MainContentWrapper = (props) => {
  const classes = useStyles()
  return (
    <Container
      maxWidth={'sm'}
      className={classes.root}
    >
      <Grid container spacing={2}>
        {
          props.items.map((item) => props.children(item))
        }
      </Grid>
    </Container>
  )
}

export default MainContentWrapper
