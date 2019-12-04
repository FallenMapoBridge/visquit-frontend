import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  content: {
    height: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#e7e7e7',
      cursor: 'pointer',
    },
  },
  buttonContainer: {
    alignItems: 'center',
  },
}))

const MenuItem = (props) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card
      >
        <CardContent
          className={classes.content}
        >
          <Grid
            container
            className={classes.buttonContainer}
            direction="column"
            spacing={1}
          >
            <Grid item>
              <Typography
                variant="h5"
              >
                {props.item.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
              >
                {props.item.price}원
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MenuItem
