import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  contents: {
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#e7e7e7'
    }
  },
  typo: {
    fontWeight: 'lighter',
    color: '#7a7a7a'
  }
}))

const MainButton = (props) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card>
        <CardContent className={classes.contents}>
          <Typography className={classes.typo} variant="h3">{props.children}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MainButton
